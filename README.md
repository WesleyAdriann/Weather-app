Weather App
============

## Description

This is app using Open Weather

## Hierarchy

- **/public** directory where the react injects javascript in develop;
- **/build** directory created after execute command build, where is located files for production;
- **/src** directory where the develop files is located;
  - **/components** directory where the react components is located;
  - **/css** directory where application style is located;
  - **/config** directory where project configuration is located;

## Prerequisites

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com)

## Usage

In the directory, install the dependencies
```bash
npm install
```
Start React development server
```bash
npm start
```
Await for browser window open in http://localhost:3000.

## Deployment
In the directory, install the dependencies
```bash
npm install
```
Execute build command to create minify version to production
```bash
npm run build
```
Will be create folder /build with the files. Inserts into HTTP server. [More information](https://create-react-app.dev/docs/deployment/)

## Built With

- [ReactJs](https://reactjs.org)
- [Create React App](https://create-react-app.dev)
- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com)
- [React Sparklines](https://github.com/borisyankov/react-sparklines)
- [Open Weather](https://openweathermap.org/api)

## Authors

- [Wesley Adriann](https://github.com/WesleyAdriann)

## URL Project Reference

- [https://github.com/WesleyAdriann/weather_app](https://github.com/WesleyAdriann/weather_app)

## Environment variables

Environment variables is located in */src/config/*

**OpenWheaterKey - key** - Open Weather Api's key
```
key
```