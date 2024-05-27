import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <div className='Registraton-name'>
          <h1>Registration Form</h1>
        </div>
        <div>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              type='text'
              placeholder='Enter your name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='gender'>Gender:</label>
            <select
              name='gender'
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              type='password'
              placeholder='Enter your password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
