import './App.css';
import React, { Component } from 'react';
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Test from './Test.js'
import LandingPage from './components/LandingPage'
import SearchBar from './components/SearchBar.js'
class App extends Component {

<<<<<<< HEAD
  render() {
    return (
      <div className="App">
        <SearchBar />
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
=======
function App() {
    return (
        <div className="App">
            <Test />
        </div >
    );
>>>>>>> clean up
}


export default App;
