import React, { Component } from 'react';
import TypeAhead from 'react-uikit-typeahead';
import UIKit from 'uikit'
import 'uikit/dist/css/uikit.min.css'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      typeAheadSuggestions: ['josh', 'tony', 'max', 'amanda', 'john', 'jenny', 'alice'],
      selected: ""
    }
  }

  handleTypeAheadChange = (e) => {
    this.setState({ selected: e });
  }

  render() {
    return (
      <div className="App uk-margin-medium">
        <p className="uk-text-muted">Selected: {this.state.selected}</p>
        <div className="uk-card uk-card-default uk-card-small uk-width-1-6 uk-align-center">
          <div className="uk-form-controls">
            <TypeAhead suggestions={this.state.typeAheadSuggestions} showSuggestions={true} handleTypeAheadChange={this.handleTypeAheadChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
