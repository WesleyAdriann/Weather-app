import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import WeatherItem from './components/WeatherItem';

import { key } from './config/OpenWheaterKey';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      Search : '',
      Cities : [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    const {value, name} = e.target;
    this.setState({
      [name] : value
    })
  }

  handleSearch(e) {
    e.preventDefault();
    if(this.state.Search !== '' ) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.Search}&appid=${key}&units=metric`)
        .then(resp =>  {
          console.log(resp);
          if(resp.status === 200) {
            this.setState({
              Cities : [this.state.Cities] + [resp.data]
            })
          }
        });
    }
  }
  

  render() {
    return (
      <div className="container mt-5 bg-white rounded" style={{height: '90vh'}}>
      <div className="row p-3">
        <div className="col w-100">
        <SearchBar handleChange={this.handleChange} handleSearch={this.handleSearch}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {Object.values(this.state.Cities).map((value, key) => {
            console.log(value);
            return(
              <div/>
            )
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
