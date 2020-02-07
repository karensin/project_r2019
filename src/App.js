import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Test from './Test.js'
import LandingPage from './components/LandingPage'
class App extends Component {

  render() {
    return (
      <div className="App">
        <LandingPage />
        <Header />

        <Test />

        {/* <About />
        <Features />
        <FAQ /> */}
        <Footer />
      </div>
    )
  }
}


export default App;
