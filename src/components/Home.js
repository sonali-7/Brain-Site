import React from 'react'
import styled from 'styled-components'

import image from "../images/cerebral-hemispheres.jpg"
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: column;    
`;

const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 290px;
    height: calc(100% - 560px);

    img {
        width: 500px;
        height: 400px;
        margin-top: 150px;
    }
`;

const HomeButton = styled.button`
    height: 50px;

`


const Home = () => {
  return (
    <Container>
      <LogoSection>
        <img
            src={image}
            alt='brain-logo'
            />
      </LogoSection>
      <Link to="/frontal"><HomeButton>Frontal</HomeButton></Link>
      <Link to="/parietal"><HomeButton>Parietal</HomeButton></Link>
      <Link to="/occipital"><HomeButton>Occipital</HomeButton></Link>
      <Link to="/temporal"><HomeButton>Temporal</HomeButton></Link>
    </Container>
  )
}

export default Home
