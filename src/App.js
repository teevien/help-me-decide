import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Header from './components/Header';
import Button from './components/Button';
import AddOption from './components/AddOption';

class App extends Component {

  render() {
    const subtitle = 'Let me decide your life'

    return (
      <div className="App">
          <Header subtitle={subtitle} />
          <Button />
          <AddOption />
      </div>
    );
  };
};

export default App;
