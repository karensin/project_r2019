import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Header />


        {/* <About />
        <Features />
        <FAQ /> */}
        <Footer />
      </div>
    )
  }
}


export default App;
