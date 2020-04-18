import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Styles
import './styles/common.css';
import './styles/bootstrapGrid.css';

//Index file import
import Header from './components/Common/Header/Header';
import Landing from './pages/Landing/Landing';
import Footer from './components/Common/Footer/Footer';

function App() {

  return (
    <div className="pageBody">
      <Header />
      <div className="page">
        <Router>
          <Route path='/' component={Landing} />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
