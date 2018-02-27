import React, { Component } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Paralax1 from './components/Paralax1';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Paralax1 />
          <AboutMe />
          <Footer />        
        </div>
      </div>
    );
  }
}

export default App;
