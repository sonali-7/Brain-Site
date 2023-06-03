import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components'


const StyledTextarea = styled.textarea`
    border: none;
    height: 100vw;
    width: 100%;
    resize: vertical;  
    background-color: #A8E4A0; 
`;

const Note = ({ handleAddNote }) => {
    const [note, setNote] = useState('');

    const handleChange = (event) => {
        setNote(event.target.value);
    };

    useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('csmwd-data')
		);

		if (savedNotes) {
			setNote(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'csmwd-data',
			JSON.stringify(note)
		);
	}, [note]);

  return (
    <div className='note'>
        <StyledTextarea 
            placeholder='Type note here...'
            onChange = {handleChange}
            value = {note}>
        </StyledTextarea>
        <dive className='note-footer'></dive>

    </div>
  )
}

export default Note
