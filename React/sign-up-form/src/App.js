import './App.css';
import React from 'react';

function App() {

  function handleSubmit(e) {
    e.preventDefault()
  }
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  
  console.log(formData);

  function handleChange(e) {
    console.log(e);
    const {name, value} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>

        <input 
            type="email"
            placeholder='Email address' 
            className='form-input'
            onChange={handleChange}
            name="email"
        />

        <input 
            type="password"
            placeholder='Password' 
            className='form-input'
            onChange={handleChange}
            name="password"
        />

        <input 
            type="password"
            placeholder='Confirm password' 
            className='form-input'
            onChange={handleChange}
            name="confirmPassword"
        />

        <div className='form-marketing'>
            <input 
                id='okayToEmail'
                type="checkbox" 
            />

            <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>

        <button className='form-submit'>
          Sign up
        </button>


      </form>
    </div>
  );
}

export default App;
