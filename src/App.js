import React, { Component } from 'react';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Page1/>
        <Page2/>
      </div>
    );
  }
}

export default App;
