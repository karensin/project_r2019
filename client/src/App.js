import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import SearchBar from './components/SearchBar.js'
import LandingPage from './components/LandingPage.js';


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
