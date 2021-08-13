import Reat, { useState } from 'react';
import PropTypes from 'prop-types';


const CategoryAdd = ({ setCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategory( value => [inputValue, ...value]);
            setInputValue('')
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>{ inputValue }</p>
                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange } />
                
            </form>
        </div>
    )
}

CategoryAdd.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default CategoryAdd;