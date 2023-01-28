// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import OrderConfirmPage from './components/OrderPage/OrderConfirmPage';
import OrderPage from './components/OrderPage/OrderPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ViewMorePage from './components/ViewMorePage/ViewMorePage';
import VMnews from './components/ViewMorePage/VMnews';

import RoomListPage from './components/RoomListPage/RoomListPage';
class App extends Component {
  render() {
    return(

    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/Ordered" element={<OrderConfirmPage/>}/>\
        <Route exact path="/Order" element={<OrderPage/>}/>
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/viewmorepage" element={<ViewMorePage/>}/>
        <Route exact path="/VMnews" element={<VMnews/>}/>
        
        <Route exact path="/roomlistpage" element={<RoomListPage/>}/>
      </Routes>
    </Router>
    </div>
    );
  };
  
}

export default App;
