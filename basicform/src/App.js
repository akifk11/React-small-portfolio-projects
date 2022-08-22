import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })
  const [formValid, setFormValid] = useState(false)
  const [clickControl, setClickControl] = useState(false)
  const handlefirstname = (e) => {
    e.preventDefault()
    setValues({ ...values, firstname: e.target.value })
  }
  const handlelastname = (e) => {
    e.preventDefault()
    setValues({ ...values, lastname: e.target.value })
  }
  const handleemail = (e) => {
    e.preventDefault()
    setValues({ ...values, email: e.target.value })
  }
  const formSubmitButton = (e) => {
    e.preventDefault()
    if (values.firstname && values.lastname && values.email) {
      setFormValid(true)
    } else {
      setClickControl(true)
    }

  }
  return (
    <div className="App">
      <form action="" className='form-class'>
        {formValid && <div className='success-div'>Form Success</div>}
        <input className='form-input' type="text" placeholder='please enter firstname' name='firstname'
          onChange={(event) => handlefirstname(event)} />
        {values.firstname === "" && clickControl ? <span>empty firstname</span> : null}
        <input className='form-input' type="text" placeholder='please enter lastname' name='lastname'
          onChange={(event) => handlelastname(event)}
        />
        {values.lastname === "" && clickControl ? <span>empty lastname</span> : null}
        <input className='form-input' type="text" placeholder='please enter email' name='email'
          onChange={(event) => handleemail(event)}
        />{values.email === "" && clickControl ? <span>empty email</span> : null}
        <button onClick={(e) => formSubmitButton(e)} className='form-button'>Register</button>
      </form>
    </div>
  );
}

export default App;
