import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import dataStore from './redux/store';
import { Provider } from 'react-redux';

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
      <Provider store={dataStore}>
        <div className="page">
          <Router>
            <Route path='/' component={Landing} />
          </Router>
          <Footer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
