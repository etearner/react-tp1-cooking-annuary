import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const RecipeCollection = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then((res) => setMeals(res.data.meals));
    }, [])

    return (
        <div className="recipes">
            {meals.map((meal, index) => (
                <RecipeCard key={index} meal={meal} />
            ))}
        </div>
    );
};

export default RecipeCollection;
