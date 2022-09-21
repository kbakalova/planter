import React from 'react';
import styled from 'styled-components'
import plantPics from '../data.js';

const ImageGrid = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

function hello() {
  console.log('you clicked a plant!');
}

function PlantPics(props) {
  return (
    <ImageGrid>
      {
        plantPics.map((pic) => <Image src={pic} onClick={props.handleClick}/>)
      }
    </ImageGrid>
  );
}

export default PlantPics;