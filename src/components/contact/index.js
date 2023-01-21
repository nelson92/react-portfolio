// import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers.js';


// TODO import a helper function to validate message body isn't blank

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

 const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

  if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else if (name === 'message') {
    setMessage(inputValue);
  }    
 };

 const handleFormSubmit = (e) => {
    e.preventDevault();

  if (!validateEmail(email)) {
    setErrorMessage('Enter a valid email address')
    return;
  }
  

    setName('');
    setEmail('');
    setMessage('');

 };

 function checkEmpty(e) {
  if(!e.target.value) {
    setErrorMessage( e.target.name + " is a required field");
  }
}

 return (
    <div className="background">
      <h1>Contact</h1>
        
        <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur = {checkEmpty}
          type="text"
          className='form-control'
          placeholder="name"
        />        
          <input 
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur = {checkEmpty}
          type="email"
          className='form-control'
          placeholder='email'
          />
          <input idName="message form"
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur = {checkEmpty}
          type="text"
          className='form-control'
          placeholder="message"
        />
        <br />
        <button onClick={handleFormSubmit}
        className="btn btn-primary"
        type="submit"
        >
          Submit</button>
        </form>
        <div>
          {/* ternary function 
        {errorMessage ?} 
          <p className="error-text">Message field can't be blank</p> */}
        </div>
         
    </div>

 );
}

export default Contact;