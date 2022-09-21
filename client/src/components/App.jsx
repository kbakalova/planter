import React from 'react';
import Navbar from './Navbar.jsx';
import PlantPics from './PlantPics.jsx';
import PlantPage from './PlantPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictureClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ pictureClicked: true });
  }

  render() {
    return (
      <div>
        <Navbar />
        {
          this.state.pictureClicked ? <PlantPage/> :
          <PlantPics handleClick={this.handleClick} />
        }
      </div>
    );
  }
}

export default App;