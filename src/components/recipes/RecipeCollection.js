import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import ItemNotFound from '../core/ItemNotFound';
import RecipePost from './RecipePost';

const RecipeCollection = () => {
    const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const [callApi, setCallApi] = useState(true);
    const [meals, setMeals] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const [displayed, setDisplayed] = useState(false);

    // Appel API pour retrouver les recettes sans filtre
    useEffect(() => {
        if (callApi) {
            axios
                .get(api)
                .then((res) => setMeals(res.data.meals));
        }
    }, [callApi])
    // Appel API en filtrant sur les mots saisis
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
    // Met à jour les données pour afficher la modale
    const handlePost = (e, meal) => {
        e.preventDefault();
        setDisplayed(true);
        setRecipe(meal);
    }
    // Efface le recipe pour recharger le composant enfant
    const cleanRecipe = () => {
        setRecipe(null)
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

            {/* Affiche les recettes */}
            {meals ?
                meals.map((meal, index) => (
                    <RecipeCard key={index} handlePost={handlePost} meal={meal} index={index} />
                )) :
                <ItemNotFound />
            }

            {/* Affiche la modal qui contient de la recette sur laquelle, l'utilisateur a cliqué */}
            {recipe ? <RecipePost meal={recipe} displayed={displayed} cleanRecipe={cleanRecipe} /> : null}
        </div>
    );
};

export default RecipeCollection;
