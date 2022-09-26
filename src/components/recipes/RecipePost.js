import { useEffect, useState } from "react";

const RecipePost = ({ meal, cleanRecipe, displayed = false }) => {
    const [ingredients, setIngredients] = useState('');
    const [isDisplayed, setIsDisplayed] = useState(displayed);
    const handleHide = (e) => {
        setIsDisplayed(false)
        cleanRecipe()
    }
    useEffect(() => {
        // Récupère les ingrédients dès que le composant est monté
        if (ingredients.length === 0) {
            let ingredients = '';
            for (let i = 1; i <= 20; i++) {
                let name = 'strIngredient' + i;
                if (meal[name].length > 0) {
                    ingredients += meal[name] + ', ';
                }
            }
            setIngredients(ingredients.slice(0, -2));
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={'modal ' + (isDisplayed ? 'show' : 'hide')}>
            <div className="dark"></div>

            <div className="box">
                <div className="modal-head">
                    <h2>{meal.strMeal}</h2>
                    <button className="close" onClick={(e) => handleHide()} title={'Fermer'}></button>
                </div>
                <div className="modal-body">
                    <div className="featured">
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </div>
                    <div className="details">
                        <ul>
                            <li>
                                <span className="label">Origine :</span> {meal.strArea}
                            </li>
                            <li>
                                <span className="label">Catégorie :</span> {meal.strCategory}
                            </li>
                            <li>
                                <span className="label">Ingrédients : </span> {ingredients}
                            </li>
                        </ul>

                        <div className="tags">
                            {
                                meal.strTags ? meal.strTags.split(',').map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                )) : ''
                            }
                        </div>
                    </div>
                    <div className="clear"></div>

                    <article>
                        <h3>Conseil de cuisson</h3>
                        {meal.strInstructions}
                    </article>
                </div>
            </div>

        </div>
    );
};

export default RecipePost;