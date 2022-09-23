import React from 'react';
import RecipeCollection from '../components/recipes/RecipeCollection';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Bienvenue au restaurant React Cook</h1>
            </header>
            <main>
                <RecipeCollection />
            </main>
        </div>
    );
};

export default Home;