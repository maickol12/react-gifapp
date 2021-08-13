//import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helper/getGifs';
import { useFetchGifs } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const CategoryGifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    // const [count, setCount ] = useState(0);
    
    const {data,loading} = useFetchGifs(category);

    

    // useEffect( () => {
    //     getGifs(category).then( setImages );
    // } , []);

   
    return(
        <div>
            <h3>Category { category }</h3>
            { loading && <p className="animate__animated animated__flash">Cargando</p>}
            <div className='card-grid'>
                {
                    data.map((img) => (
                        <GifGridItem 
                            key={img.id+img.title}
                            {...img} />
                    ))
                }
            </div>
        </div>
    )
};

CategoryGifGrid.propTypes = {
    category: PropTypes.string.isRequired
}