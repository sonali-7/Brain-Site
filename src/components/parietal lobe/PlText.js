import React from 'react'

import map from "../../images/parietalmappings.png";
import hemi from "../../images/hemispatial_neglect.png"
import styled from 'styled-components';
import { Container } from '../../styles/center';

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
`;

const PL_text = () => {
  return (
    <div>
      <h1>THE PARIETAL LOBE</h1>
        <p class="text">
          The Parietal lobe is one of four main lobes of the brain. This lobe is specifically involved in sensory and motor functions.          There are two main areas in the parietal lobe. The Somatosensory cortex and the rest of the parietal cortex (posterior parietal lobe)
        </p>
        <h2 class="header">Somatosensory Cortex</h2>
        <p>
        The Somatosensory cortex is primarily responsible for processing tactile information. Different parts of the somatosensory cortex respond to different types of stimuli. Brodmann’s areas 3b and 1 respond to skin nerve cell stimulation. Brodmann’s area 3a responds to internal body movement (muscles, tendons, etc). Brodmann’s area 2 reacts to both types of stimuli. 
        </p>
        <p>
        Scientists have found correlations between responses to stimuli on certain parts of the body and various regions on the somatosensory cortex. Below is an example of which regions correspond to which body part. 
        </p>
        <Container>
          <StyledImg src={map} />
        </Container>
        <h3>Clinincal Condition</h3>
        <p>
        The proximity of two different body parts in the somatosensory cortex can help explain odd cases where patients ascribe sensory information to the wrong body part or experience phantom touches. 
        </p>
        <h2 class="header">Posterior Parietal Lobe</h2>
        <p class="text">
        The posterior parietal lobe is particularly important in spatial sensory information and paying attention to your surroundings. The posterior parietal lobe is found to play a hand in the division of attention between spatial locations, features, objects, etc. 
        </p>
        <h3>Clinical Condition</h3>
        <p>
        A common condition caused by damage in the posterior parietal lobe is hemispatial neglect. Hemispatial neglect is when a patient is only able to visualize half their world. This condition is strongly correlated to damage in the right parietal lobe. Here’s an example of a clock drawn by a patient with hemispatial neglect. 
        </p>
        <Container>
          <StyledImg src={hemi} />
        </Container>
    </div>
  )
}

export default PL_text
