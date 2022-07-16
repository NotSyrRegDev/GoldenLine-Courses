
import React  from 'react';

import './App.css';
import {  BrowserRouter as Router   } from 'react-router-dom';
import MainApp from './MainApp';
import { AppProvider } from './contexts/AppContext';


function App() {


  return (
    <AppProvider>
    <div className="app">
     
     <Router>
    <MainApp />
     </Router>

    </div>
    </AppProvider>
  );
}

export default App;
