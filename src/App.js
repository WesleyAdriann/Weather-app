import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import WeatherItem from './components/WeatherItem';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      Search : '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name] : value
    })
  }
  

  render() {
    return (
      <div className="container mt-5 bg-white rounded" style={{height: '90vh'}}>
      <div className="row p-3">
        <div className="col w-100">
        <SearchBar handleChange={this.handleChange}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <WeatherItem/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
