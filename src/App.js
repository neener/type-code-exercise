import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeroImage from './HeroImage';
import ArticleTitle from './ArticleTitle';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <article>
        <HeroImage/>
        <ArticleTitle/>
      </article>
    );
  }
}

export default App;
