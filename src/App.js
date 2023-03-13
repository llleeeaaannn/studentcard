import './styles/styles.css';
import Home from './views/home';
import Frank from './views/frank';
import NotFound from './views/notfound';
import ScrollToTop from './scripts/scrollToTop';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppContext = React.createContext();

function App() {

  const [menu, setMenu] = useState(false);

  return (
    <AppContext.Provider value={{ menu, setMenu }}>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/frank' element={<Frank />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
