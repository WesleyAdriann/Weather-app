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
    //console.log(this.state.Cities);
    
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
    if(this.state.Cities.length >= 5) {
      this.state.Cities.splice(4, 1);
    }

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
            let tempPrevArr,humidadePrevArr = []
            city[1].list.map(value => {
              tempPrevArr = [...tempPrevArr, value.main.temp];
              humidadePrevArr = [...humidadePrevArr, value.main.humidity];
            })
            console.log(city[1])
            return (
              <WeatherItem
                key={city.indexOf}
                name={city[0].name}
                temp={city[0].main.temp}
                tempPrev={tempPrevArr}
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
