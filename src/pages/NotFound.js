import React from 'react';
import ItemNotFound from '../components/core/ItemNotFound';

const NotFound = () => {
    return (
        <div className='meals-container'>
            <ItemNotFound displayMessage={"La page que vous recherchez n'existe pas."} />
        </div>
    );
};

export default NotFound;