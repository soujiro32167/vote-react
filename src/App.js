import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Button from 'react-bootstrap/lib/Button';
import Checkbox from './components/checkbox';
import checkboxes from './data/checkboxes';
import categories from './data/categories';
import PillGroup from './components/pill-group';
import FormContent from './components/form-content';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
              <div className="row">
                  <div className="col-md-3">
                      <h2>Products</h2>
                      <PillGroup context={categories} />
                  </div>
                  <div className="col-md-9">
                    <h2>Categories</h2>
                    <FormContent categories={categories} checkboxes={checkboxes}/>
                  </div>
              </div>
          </div>
    );
  }
}

export default App;
