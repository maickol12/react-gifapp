import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ( {id,title,url} ) => { 
    return(
        <div className='card animate__fadeIn_10s'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}