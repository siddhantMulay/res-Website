import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styles
import './styles/common.scss';

//Index file import
import Header from './components/Common/Header/Header';
import Landing from './pages/Landing';

function App() {

  return (
    <div className="pageBody">
      <Header />
      <Router>
        <Route path='/' component={Landing} />
      </Router>
    </div>
  );
}

export default App;
