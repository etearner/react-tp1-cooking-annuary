import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <header className='title'>
        <a href='/' title="Accueil">Annauire de recettes React</a>
        <div className='slogan'>Fièrement propulsé par 2.00.96</div>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
