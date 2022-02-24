import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './form.scss';
import { useNavigate } from 'react-router-dom';

export const Form = ({ type='signin' }) => {
    let navigate = useNavigate();
    const [values, setValues] = useState(null);
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if((values) && (values.email.trim() !== '' && values.email.length > 2) && 
            (values.password.trim() !== '' && values.password.length > 2) ){
            if(values.email.match(mailformat)){
                setError('');
                navigate('/home');
            } else {
                setError('Thats not a correct email format');
            }
        } else {
            setError('Email and password are required');
        }
    }

    const handleInput = ({ target }) => {
        setError('');
        setValues({
            ...values,
            [target.name]: target.value,
        });
    }

    return (
      <>
          <form action="#" onSubmit={handleSubmit} className='form' autoComplete='off'>
              <fieldset className='form__grid'>
                  <legend>
                      <h1>{type === 'login' ? 'Login' : 'Register'}</h1>
                  </legend>
                  <small className='form__error'>{error}</small>
                  <input type="text" inputMode='email' className='form__input' name='email' placeholder='email' onChange={handleInput} />
                  <input type="password"  className='form__input' name='password' placeholder='password' onChange={handleInput}/>
                  <button type='submit' value={type === 'login' ? 'login' : 'next'} className='form__button--primary'>{type === 'login' ? 'login' : 'next'}</button>
                  {/* {type === 'login' && <small>Forgot password? <Link to='/building'>Click here</Link></small>} */}
              </fieldset>
          </form>
      </>
    )
}
