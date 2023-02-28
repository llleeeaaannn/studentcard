import './styles/styles.css';
import Home from './views/home';
import NotFound from './views/notfound';
import ScrollToTop from './scripts/scrollToTop';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppContext = React.createContext();

function App() {

  const [random, setRandom] = useState(false);

  return (
    <AppContext.Provider value={{ random, setRandom }}>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
