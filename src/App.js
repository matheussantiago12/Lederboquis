import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import './style.css';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
