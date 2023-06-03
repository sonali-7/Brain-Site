import React from 'react'

import pavlov from "../../images/pavlov.jpg"
import hm from "../../images/HMbrain.jpg"
import styled from 'styled-components';
import { Container } from '../../styles/center';

const StyledImg = styled.img`
    width: 400px;
    height: 250px;
`;

const TlText = () => {
  return (
    <div>
      <h1>THE TEMPORAL LOBE</h1>
        <p class="text">
        The temporal lobe contains areas of your brain that manage or contribute to several of your most useful abilities: language, memory and senses. As it is the second largest lobe, there are many important areas in the temporal lobe. Three well-known ones are the amygdala, the hippocampus, and Wernicke’s area. 
        </p>
        <h2 class="header">Amygdala</h2>
        <p>
        The amygdala is a part of the limbic system, situated in the temporal lobe. Amygdala is the integrative center for emotions, emotional behavior, and motivation. The amygdala is particularly associated with strong emotions, such as fear and anger.
        </p>
        <p>
        The amygdala also works with memory. This can help develop a fear, but it can also help in overcoming the fear. The amygdala can be conditioned to believe that something it previously tagged as scary is no longer scary. This phenomenon is an extension of Pavalovian conditioning (shown below), which is commonly associated with training the amygdala to respond to stimuli in a certain way. 
        </p>
        <Container>
          <StyledImg src={pavlov} />
        </Container>
        <h2 class="header">Hippocampus</h2>
        <p class="text">
        The hippocampus is extremely important in learning, memory, and navigation. Like the amygdala, it is part of the limbic system and also involved in emotions. This structure sits in the lowest part of the temporal lobe. 
        </p>
        <p>
        Autobiographical memory is stored in the hippocampus. Information like time, place, and people, are linked to specific events. Emotional context from the amygdala is also linked to each event. Procedural memory, or the memory of how to do tasks, is not related to the hippocampus. Because of this, people can lose autobiographical memory while still knowing how to read and write.   
        </p>
        <h3>Clinical Relevance</h3>
        <p>
        Amnesia is one of the most well-known conditions relating to the hippocampus. People with amnesia struggle with autobiographical memory, but their procedural memory is often still intact. 
        </p>
        <p>
        An extreme case of this kind is that of Henry Molaison (HM). HM had his hippocampus removed after many seizures. He was still able to function properly, and remember tasks, but his autobiographical memory was gone forever. 
        </p>
        <Container>
            <StyledImg src={hm}></StyledImg>
        </Container>
        <h2>Wernicke’s Area</h2>
        <small>
        See also: <a href="/frontal">Broca's area</a>
        </small>
        <p>
        Wernicke’s area is located in Brodmann area 22. It's specifically important in the understanding of language. Wernicke’'s area works closely with Broca's area. 
        </p>
        <h3>Clinical Relevance</h3>
        <p>
        Aphasia (more in Broca’s area section) can also be a result of a malfunctioning Wernicke’s area. Although there are no muscular issues, the inability to develop mental images of words can lead to misplacement of words and speech impairments.    
        </p>

    </div>
  )
}

export default TlText
