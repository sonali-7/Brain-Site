import React from 'react'
import { Container1 } from '../styles/box'
import { Subtainer } from '../styles/box';
import styled from 'styled-components'
import header from "../images/parietal_lobe.jpg"
import { Container } from '../styles/center';
import PlText from '../components/parietal lobe/PlText';
import PlOther from '../components/parietal lobe/PlOther';
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

const Parietal = () => {
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
        <PlText></PlText>
        <PlOther></PlOther>
      </Subtainer>
      </div>
    </Container1>
  )
}

export default Parietal
