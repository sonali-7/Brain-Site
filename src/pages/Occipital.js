import React from 'react'
import { Container1 } from '../styles/box'
import { Subtainer } from '../styles/box';
import styled from 'styled-components'
import header from "../images/occipital-lobe-structure.jpg"
import { Container } from '../styles/center';
import OlText from '../components/occipital lobe/OlText';
import OlOther from '../components/occipital lobe/OlOther';
import Note from '../components/Note';
import StickyBox from 'react-sticky-box'

const Notes = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-right: 10px;
`;

const Stylabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: 10px;
`;


const StyledImg = styled.img`
    width: 500px;
`;

const Occipital = () => {
  return (
    <Container1>
    <Notes>
          <Stylabel>
          These notes stay with you on all pages! Please resize to your liking.
          </Stylabel>
            <Note></Note>
    </Notes>

        
      <div>
      <Subtainer>
      <Container>
       <StyledImg src={header} alt="Parietal lobe diagram" />
      </Container>
        <OlText></OlText>
        <OlOther></OlOther>
      </Subtainer>
      </div>
    </Container1>
  )
}

export default Occipital