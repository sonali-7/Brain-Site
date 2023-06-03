import React from 'react'
import styled from 'styled-components'

import image from "../images/brain.jpg"
import { Link } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;   
`;

const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 290px;
    height: calc(100% - 560px);
    padding-bottom: 10px;

    img {
        width: 550px;
        height: 400px;
        margin-top: 100px;
    }
`;

const HomeButton = styled.button`
    background-color: #A8E4A0;
    height: 50px;
    width: 300px;
    border: none;
    border-radius: 6px;
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
      <Container>
        <Link to="/frontal" className='homeLink'><HomeButton>Frontal Lobe</HomeButton></Link>
        <Link to="/parietal" className='homeLink'><HomeButton>Parietal Lobe</HomeButton></Link>
        <Link to="/occipital" className='homeLink'><HomeButton>Occipital Lobe</HomeButton></Link>
        <Link to="/temporal" className='homeLink'><HomeButton>Temporal Lobe</HomeButton></Link>
      </Container>
    </Container>
  )
}

export default Home
