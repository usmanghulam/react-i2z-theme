import React, { Component } from 'react';
import Nav from './nav';
// import {Route} from 'react-router-dom';
import Header from './header';
import Strategy from './strategy';
import ROI from './ROI';
class App extends Component {
    render(){
        return (
        <div>
            <Nav />
            <Header/>
            <Strategy/>
            <ROI />
        </div>
        )
    }
}

export default App;