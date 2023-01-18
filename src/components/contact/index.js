import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import './style.css';

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
  } else {
    setMessage(inputValue);
  }    
 };

 const handleFormSubmit = (e) => {
    e.preventDevault();

    // TODO write a function to validate message body isn't blank
    // if Name is empty set error message

    // function validateForm() {
    //     let x = document.forms["myForm"]["fname"].value;
    //     if (x == "") {
    //       alert("Name must be filled out");
    //       return false;
    //     }
    //   }

    setName('');
    setEmail('');
    setMessage('');

 };

 return (
    <div>
        <p>Contact</p>
        <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />        
          <input 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder='email'
          />
          <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
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