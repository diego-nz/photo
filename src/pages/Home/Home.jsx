import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '../../components/Grid/Grid';

export const Home = () => {
  return (
    <>
        <Link className='back-button' to='/'>&#8592; Logout</Link>
        <Grid></Grid>
    </>
  )
}
