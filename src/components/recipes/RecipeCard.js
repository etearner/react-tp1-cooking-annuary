
const RecipeCard = ({ meal, index }) => {
    const getDescription = (desc) => {
        let max = 160;
        return desc.length <= max ? desc : desc.substring(0, max) + '...';
    }

    return (
        <div className={'card ' + (index % 2 == 0 ? 'even' : null)}>
            <div className='card-head'>
                <h3>{meal.strMeal}</h3>
            </div>
            <div className='card-body'>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <p>
                    {getDescription(meal.strInstructions)}
                </p>
            </div>
        </div>
    );
};

export default RecipeCard;
