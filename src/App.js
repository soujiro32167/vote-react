import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Button from 'react-bootstrap/lib/Button';
import Checkbox from './components/checkbox';
import checkboxes from './data/checkboxes';
import PillGroup from './components/pill-group';

class App extends Component {
  render() {
    return (
      <div>
        <PillGroup />
      </div>
    );
    //{checkboxes.map(checkbox => <Checkbox {...checkbox} value="true" key={ checkbox.name }/>)}

  }
}

export default App;
