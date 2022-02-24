import React from 'react';
import './splashscreen.scss';
import { Link } from 'react-router-dom';

export const SplashScreen = () => {
    return (
      <section className='background'>
          <h1 className='background__title'>photo</h1>
          <div className='background__footer'>
            <Link to='/login' className='footer__button footer__button--outline'>
              Login
            </Link>
            <Link to='/signin' className='footer__button'>
              Register
            </Link>
          </div>
      </section>
    )
}
