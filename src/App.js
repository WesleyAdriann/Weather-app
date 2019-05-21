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
      Prevision : [],
      test : null
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
    console.log(this.state.Cities);
    if(this.state.Cities.length >= 3) {
      this.state.Cities.splice(2, 1);
    }
    if(this.state.Search !== '' ) {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.Search},${this.state.test}&units=metric&appid=${key}`)
        .then(resp =>  {
          axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${resp.data.id}&units=metric&appid=${key}`)
            .then(res => {
              if(resp.status === 200) {
                this.setState({
                  Cities : [[resp.data, res.data] , ...this.state.Cities],
                })
              }
            })
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
          {this.state.Cities.map(city => {
            return (
              <WeatherItem
                key={city[0].id}
                name={city[0].name}
                temp={city[0].main.temp}
                />
            )
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
