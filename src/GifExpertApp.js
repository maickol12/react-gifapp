import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import { CategoryGifGrid } from './components/CategoryGifGrid';

const GifExpertApp = () => {
    //const categories = ['One Punch','Samurai x','Dragon ball']
    const [categories, setCategory] = useState(['Dragon ball']);
    const handleAdd = (categoryName) => {
         setCategory([...categories,categoryName]);
    }
    return(
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <CategoryAdd setCategory={handleAdd}  />
            {
                <ol>
                    { categories.map((value,index) => <CategoryGifGrid key={`cat${index}`} category={value} /> ) }
                </ol>
            }
        </div>
    )
}

export default GifExpertApp;