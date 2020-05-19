import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import LandingPage from './components/LandingPage';
// import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image } from 'semantic-ui-react'


class App extends Component {
    render() {
        return (

            <div className="App">

                <SearchBar />
                <LandingPage />
                <Header />
                <Footer />
            </div>
        )
    }
}

export default App;
