//Importing React component from React Library
import React from 'react';

/**
 * @author:"Akhilasai and spandana"
 * @param {*} props 
 * @returns {Html}
 * Creating Function Component with props passing as paramters and returns Html.
 */

function Input(props) {
  const { className, type,placeholder, value ,handleChange} = props;
  return (
    <input 
    type={type} 
    className={className} 
    placeholder={placeholder} 
    value={value}
    onChange={(event)=>handleChange(event.target.value)}>
    </input>
  );
}

export default Input;
