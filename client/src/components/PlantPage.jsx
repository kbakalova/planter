import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const GridContainer = styled.div`
    border-style: solid;
    border-weight: 1px;
    display: grid;
    justify-items: start;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-areas:
    "header header header button"
    "select select select button"
    "select1 select1 select1 button";
`;

const Header = styled.div`
    grid-area: header;
    justify-self: start;
`;
const Select = styled.div`
    grid-area: select;
    justify-self: stretch;
`;
const Select1 = styled.div`
    grid-area: select1;
    justify-self: stretch;
`;
const button = styled.div`
    grid-area: button;
`;

const ButtonContent = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: start;
`;

class PlantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      custom: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCustomize = this.handleCustomize.bind(this);
  }

  handleChange(event) {
    console.log('you made a change!');
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Saved!', this.state);

    axios.post('/plants',
      this.state
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleCustomize(event) {
    console.log('customized!');
    console.log(this.state.custom);
    this.setState({ [event.target.name]: (this.state[event.target.name] === undefined ? true : !this.state[event.target.name]) });
    console.log(this.state.custom);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div>Welcome to the Plant Page!</div>


        <img src="https://www.thespruce.com/thmb/b87rQuqMqCgdzKgELgw9nX8E01s=/3030x2021/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grow-basil-plants-1402624-07-6071d2544ef2423a99d2e30a153c2b00.jpg" width="200" height="250" />

          <form onSubmit={this.handleSubmit}>
          <GridContainer>
          <Header><h1 class="title">Care Guide</h1></Header>
          <button class="button is-primary" type="submit">
            <ButtonContent>
              Save
            </ButtonContent>
          </button>
            {
              this.state.lightingCustom ? (
                <Select><input class="input is-primary" type="text" placeholder="Custom input" /></Select>
              ) : (
                <Select>
                    <div class="select is-fullwidth">
                    <select name="lighting" value={this.state.value} onChange={this.handleChange}>
                      <option selected>🌞  Lighting</option>
                      <option>Low light</option>
                      <option>Full sun</option>
                    </select>
                  </div>
                </Select>
              )
            }
            <button class="button is-secondary" type="button" name="lightingCustom" onClick={this.handleCustomize}>+</button>
            {
              this.state.waterCustom ? (
                <Select1><input class="input is-primary" type="text" placeholder="Custom input" /></Select1>
              ) : (
                <Select1>
                <div class="select is-fullwidth">
                  <select name="water" value={this.state.value} onChange={this.handleChange}>
                    <option selected>💧  Water</option>
                    <option>When top 2in of soil is dry</option>
                    <option>When soil is completely dry</option>
                    <option>When leaves look droopy</option>
                    <option>Keep soil moist</option>
                  </select>
                </div>
                </Select1>
              )
            }
            <button class="button is-secondary" type="button" name="waterCustom" onClick={this.handleCustomize}>+</button>
            </GridContainer>
          </form>

      </>
    );
  }
}

export default PlantPage;