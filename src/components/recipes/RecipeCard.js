const RecipeCard = ({ handlePost, meal, index }) => {
    const getDescription = (desc) => {
        let max = 160;
        return desc.length <= max ? desc : desc.substring(0, max) + '...';
    }

    return (
        <div className={'meals-card' + (index % 2 === 0 ? ' even' : '')}>
            <div className='meals-card-head'>
                <h3>{meal.strMeal}</h3>
            </div>
            <div className='meals-card-body'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>
                    {getDescription(meal.strInstructions)}
                </p>
            </div>
            <div className='meals-card-foot'>
                <button onClick={(e) => handlePost(e, meal)}>Voir la recette</button>
            </div>

        </div>
    );
};

export default RecipeCard;
