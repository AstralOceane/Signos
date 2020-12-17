import React from 'react'
import Header from './components/Header/Header';
import Router from './routes/Router'
import { BrowserRouter } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Header/>
      
      <Router/>
    </BrowserRouter>
  );
}

export default App;
