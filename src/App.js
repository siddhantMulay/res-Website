import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Styles
import './styles/common.scss';

//Index file import
import Landing from './pages/Landing';

function App() {
  
  return (
      <Router>
        <div className="pageBody">
          <Route path='/' component={Landing} />
          <Redirect to='/home' />
        </div>
      </Router>
  );
}

export default App;
