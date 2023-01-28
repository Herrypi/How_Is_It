// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ViewMorePage from './components/ViewMorePage/ViewMorePage';
import RoomListPage from './components/RoomListPage/RoomListPage';
class App extends Component {
  render() {
    return(
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/viewmorepage" element={<ViewMorePage/>}/>
        <Route exact path="/roomlistpage" element={<RoomListPage/>}/>
      </Routes>
    </Router>
    </div>
    );
  };
  
}

export default App;
