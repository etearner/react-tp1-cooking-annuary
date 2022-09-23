import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import ItemNotFound from '../core/ItemNotFound';

const RecipeCollection = () => {
    const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const [callApi, setCallApi] = useState(true);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (callApi) {
            axios
                .get(api)
                .then((res) => setMeals(res.data.meals));
        }
    }, [callApi])

    const handleSearch = (keyword) => {
        if (keyword.length > 2) {
            axios
                .get(api + keyword)
                .then((res) => setMeals(res.data.meals)
                );
            setCallApi(false);
        }
        else {
            setCallApi(true);
        }
    }

    return (
        <div className="recipes">
            <div className="filters">
                <form>
                    <input
                        type="search"
                        placeholder='Recherchez une recette (en anglais)...'
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </form>
            </div>

            {meals ?
                meals.map((meal, index) => (
                    <RecipeCard key={index} meal={meal} index={index} />
                )) :
                <ItemNotFound />
            }
        </div>
    );
};

export default RecipeCollection;
