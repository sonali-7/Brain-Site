import React from 'react'

import v2 from "../../images/V2.png"
import vision from "../../images/Human_visual_pathway.png"
import styled from 'styled-components';
import { Container } from '../../styles/center';

const StyledImg = styled.img`
    width: 400px;
    height: 300px;
`;

const OlText = () => {
  return (
    <div>
      <h1>THE OCCIPITAL LOBE</h1>
        <p class="text">
        The occipital lobe is the smallest and farthest lobe of the brain. As its name suggests, it is the lobe of visual information processing. The occipital lobe/ The visual cortex itself is split up into almost five more parts. The hypothesis is that as visual information gets passed along, each subsequent cortical area is more specialized than the last. The most important of these critical areas is V1 or the primary visual cortex.
        </p>
        <h2 class="header">Primary Visual Cortex</h2>
        <p>
        This section is also known as Brodmann area 17. The primary visual cortex makes up a small portion of the visible surface of the cortex in the occipital lobe. However, it stretches far into a sulcus, or fold, making it quite large overall. 
        </p>
        <p>
        The primary visual cortex takes in signals from the optical nerve and passes them along to other visual cortical areas. The neurons in the primary visual cortex are specialized based on the area of the visual field that they correspond to. Below is a diagram of the visual field and how visual information reaches the cortex.
        </p>
        <Container>
          <StyledImg src={vision} />
        </Container>
        <p>
        V1 is also known for its job in pattern recognition. V1 responds to simple visual components such as orientation and direction. The summation of this information provides the foundation for more complicated pattern recognition later in the visual stream.
        </p>
        <h2 class="header">Secondary Visual Cortex</h2>
        <p class="text">
        This section is also known as Brodmann area 18 and 19. V2 has four components that work together to put together a map of the world. Like me when cells are focused on properties like orientation and color. V2 also determines more complex attributes of visual information such as whether stimuli is part of the main object or part of the background. 
        </p>
        <Container>
            <StyledImg src={v2} />
        </Container>
        <p>
            In the image above, regions of the occipital lobe are marked based on what type of visual information they deal with. 
        </p>

        <h3>Clinical Relevance</h3>
        <p>
            There are many conditions related to vision, including blindness. The occipital lobe exists, and is active, in blind patients. However, the lobe functioning can be somewhat replaced by other senses like sound, smell, etc. A differenet input being processed also means that the occipital lobe would change the strength of its connections with other regions of the brain accordingly. 
        </p>
        
    </div>
  )
}

export default OlText
