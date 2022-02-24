import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './grid.scss';

export const Grid = () => {
    const { state, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://picsum.photos/v2/list?page=${state}&limit=12`);

  return (
    <>
        <section className='grid'>
            <h1 className='grid__title'>Discover</h1>
            {
                loading 
                ? 
                    <p>loading...</p> 
                : 
                    data.map((image, index) => {
                        return <img src={image.download_url} alt={`Author: ${image.author}`} key={index} className='grid__img' />
                    })
            }
        </section>
        <button type='button' onClick={increment} className='grid__button'>See more</button>
    </>
  )
}
