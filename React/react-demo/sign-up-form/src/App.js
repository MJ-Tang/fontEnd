import './App.css';
import React from 'react';

function App() {

  
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsLetter: false
  })
  
  

  function handleChange(e) {
    // console.log(e);
    const {name, value, type, checked} = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }))
  }
  console.log(formData);


  function handleSubmit(e) {
    e.preventDefault()
    if(formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
    }

    if (formData.joinNewsLetter) {
      console.log("Thanks for signing up for our newsletter!");
    }
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
            value={formData.email}
        />

        <input 
            type="password"
            placeholder='Password' 
            className='form-input'
            onChange={handleChange}
            name="password"
            value={formData.password}
        />

        <input 
            type="password"
            placeholder='Confirm password' 
            className='form-input'
            onChange={handleChange}
            name="confirmPassword"
            value={formData.confirmPassword}
        />

        <div className='form-marketing'>
            <input 
                id='okayToEmail'
                type="checkbox" 
                name='joinNewsLetter'
                onChange={handleChange}
                checked={formData.joinNewsLetter}
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
