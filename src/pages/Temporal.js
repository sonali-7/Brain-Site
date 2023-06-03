import React from 'react'
import { Container1 } from '../styles/box'
import { Subtainer } from '../styles/box';
import styled from 'styled-components'
import header from "../images/frontal-lobe.jpg"
import { Container } from '../styles/center';
import PlOther from '../components/parietal lobe/PlOther';
import Note from '../components/Note';
import FlText from '../components/frontal lobe/FlText';


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

const Temporal = () => {
  return (
    <Container1>

        <Notes>
          <Stylabel>
            These notes stay with you on all pages!
          </Stylabel>
            <Note></Note>
        </Notes>
      
      <div>
      <Subtainer>
      <Container>
       <StyledImg src={header} alt="Parietal lobe diagram" />
      </Container>
        <FlText></FlText>
        <PlOther></PlOther>
      </Subtainer>
      </div>
    </Container1>
  )
}

export default Temporal
