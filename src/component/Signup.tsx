import React from 'react';
import '../component/Signup.css';
import logo from '../assets/Dog.jpeg'// Import your image

function Signup() {
  return (
    <div className='Container'>
      <div className='form'>
      <img src={logo} alt='Logo' className='logo' />
      <h1>Vet Man</h1>
        

        <input type='text' placeholder='Enter your id' className='text' />
        <input type='text' placeholder='Enter your mobile' className='text' />

        <button type='button' title='Sign up' className='my-button'>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Signup;
