import React, { useRef } from 'react'
import morse from '../tools/morse';

export default function MorseConverter() {
  const inputBox = useRef(null);
  const outputBox = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    let input = inputBox.current.value;
    let output = outputBox.current.value;
    outputBox.current.value = morse(input);
    console.log(morse(input)); // for testing
  }

  return (
    <>
        <div className='input'>
            <form onSubmit={handleSubmit}>
                <textarea ref={inputBox} className='inputText' name='inputBox' rows={12} cols={35} placeholder='input text here'/>
                <br/>
                <button className='inputButton'>convert</button>
                <br/>
                <br/>
            </form>
        </div>
        <div className='output'>
            <textarea ref={outputBox} className='outputText' name='outputBox' rows={12} cols={35} placeholder='output text here' />
        </div>
    </>
  )
}
