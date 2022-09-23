import React from 'react';

const RecipeCard = ({ meal }) => {
    return (
        <div className='card'>
            <div className='card-head'>
                <h3>{meal.strMeal}</h3>
            </div>
            <div className='card-body'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>
                    {meal.strInstructions}
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;
