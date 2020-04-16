import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//Styles
import './styles/common.scss';

//Index file import
import Header from './components/Common/Header/Header';
import Base from './pages/Base';

function App() {

  return (
    <div className="pageBody">
      <Header />
      <Router>
        <Route path='/' component={Base} />
        <Redirect to='/home' />
      </Router>
    </div>
  );
}

export default App;
