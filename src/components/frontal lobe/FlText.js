import React from 'react'
import lolol from '../../images/lolol.jpg'
import styled from 'styled-components';
import { Container } from '../../styles/center';

const StyledImg = styled.img`
    width: 300px;
    height: 300px;
`;

const FlText = () => {
  return (
    <div>
    <h1>THE FRONTAL LOBE</h1>
         <p>
          The frontal lobe is the largest of the four major lobes of the brain. 	The frontal lobe is important for voluntary movement, expressive language and for managing higher level executive functions. Functioning fo this lobe is critical to self-identity and our cognitive abilties.
          The frontal lobe covers many cortical areas. The premotor cortex, the primary motor cortex, and the prefrontal cortex. Aside from these cortical areas, the frontal lobe contains many more small regions. 
          </p>
         <h2>Prefrontal Cortex</h2>
         <p >This brain region has been implicated in executive functions, such as planning, decision making, short-term memory, personality expression, moderating social behavior and controlling certain aspects of speech and language. Since 2010, neuroscience has shown that the prefrontal cortex in the human brain does not reach its cognitive peak until age 25 in most people, extending adolescence past puberty. </p>
         <h3>Clinincal Relevance</h3>
         <p>
         The prefrontal cortex is well-known for its involvement in emotion, mood, and sentience. Reduced prefrontal cortex size & activity is associated with those diagnosed with mental disorders, those incarcerated, those affected by lead poisoning, and much more. The Prefrontal Cortex has also been a hot topic in the field of neuroscientific depression study.  

         </p>
         
         <h2>Premotor Cortex</h2>
         <p>
         The premotor cortex lies on Brodmann’s area 6. Neurons in the premotor cortex strongly influence behavior in the primary motor cortex. They seem to be highly involved in the selection of which movements one carries out. It responds to input well before the primary motor cortex and orients the body for movement.
         </p>
         <p>
         The premotor cortex can be split into two: lateral cortex and medial cortex. The lateral cortex is great at interpreting external cues (sensory information, etc) while the medial cortex is more concerned with internal cues. 
         </p>
          
         <h2>Primary Motor Cortex</h2>
         <p>
         As its name suggests, the primary motor cortex controls motion. The motor cortex is located in Brodmann’s area 4. The motor cortex controls motor behaviors by generating movement-specific signals and transmitting them through spinal cord circuits and motoneurons to the muscles. Precise and well-coordinated muscle activation patterns are necessary for accurate movement execution.
         </p>
         <p>
         Like with the somatosensory cortex, here’s a map of which body parts map to which primary motor cortex regions: 
         </p>
        <Container>
        <StyledImg src={lolol}></StyledImg>
        </Container>
         <h2>Broca's Area</h2>
         <small>
         See also: <a href='/temporal'>Wernicke’s area</a>
         </small>
         <p>
         Broca’s area is specialized for speech production. There is some debate about what exactly Broca’s area controls, but it is involved in the concatenation of strings to form speech. Broca’s area works closely with the Temporal Lobe (organizing sensory information) and the Motor cortex (determining how the mouth moves). 
          </p>        
          <h3>Clinical Relevance</h3>
          <p>
          Two conditions are often associated with issues in Broca’s area and the primary motor cortex. Aphasia and apraxia are both speech conditions that limit a person’s ability to converse. Aphasia is the loss of ability to understand speech, while apraxia makes it difficult to deliver correct muscle movement (resulting in difficulty while speaking).
          </p>
     </div>
  )
}

export default FlText
