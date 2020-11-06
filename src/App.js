import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Route } from 'react-router-dom';

import countriesListFromJSON from './countries.json';

import Navbar from './components/ContainerNavbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
        console.log(response);
        this.setState({
          countries: response.data,
        });
      });
  }

  render() {
    return (
      <div id="root">
        <div>
          <Navbar />
          <Route path="/" />
        </div>
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Route
              path="/:cca3"
              render={(props) => (
                <CountryDetails countries={this.state.countries} {...props} />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
