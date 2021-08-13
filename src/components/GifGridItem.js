import React from 'react';

export const GifGridItem = ( {id,title,url} ) => { 
    return(
        <div className='card animate__fadeIn_10s'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}