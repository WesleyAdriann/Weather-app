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
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.Search},BR&units=metric&appid=${key}`)
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
            let tempPrevArr = [] , umidadePrevArr = [], pressaoPrevArr = [];
            city[1].list.map(value => {
              tempPrevArr = [...tempPrevArr, value.main.temp];
              umidadePrevArr = [...umidadePrevArr, value.main.humidity];
              pressaoPrevArr = [...pressaoPrevArr, value.main.pressure];
              return ''
            })
            return (
              <WeatherItem
                key={city.indexOf}
                name={city[0].name +", " +city[0].sys.country}
                temp={parseInt(city[0].main.temp)}
                humidity={parseInt(city[0].main.humidity)}
                pressure={parseInt(city[0].main.pressure)}
                tempPrev={tempPrevArr}
                umidadePrev={umidadePrevArr}
                pressaoPrev={pressaoPrevArr}
                icon={`http://openweathermap.org/img/w/${city[0].weather[0].icon}.png`}
                alt={city[0].weather[0].description}
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
