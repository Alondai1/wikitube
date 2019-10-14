import React from 'react';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import HomePage from './pages/HomePage/HomePage.cmp'
import LoginPage from './pages/LoginPage/LoginPage.cmp'
import AdminPage from './pages/AdminPage/AdminPage.cmp'
import Header from './components/Header/Header.cmp'
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";


function App({currentTheme}) {  
  return (
    <div className={`app ${currentTheme}`}>
      <Router>
        <Header></Header>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminPage} />
      </Router>
    </div>
  );
}

const mapStateToProps = ({ appReducer }) => {

  const { currentTheme } = appReducer

  return {
    currentTheme
  };
};

export default connect(mapStateToProps)(App);

