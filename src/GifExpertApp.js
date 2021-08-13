import React, { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import { CategoryGifGrid } from './components/CategoryGifGrid';

const GifExpertApp = ({ defaultCategories = []}) => {
    //const categories = ['One Punch','Samurai x','Dragon ball']
    const [categories, setCategory] = useState(defaultCategories);
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