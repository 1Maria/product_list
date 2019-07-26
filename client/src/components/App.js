import React from 'react';
import { Component } from 'react';

//import SearchBar from '../containers/SearchBar';
import ProductsList from '../containers/ProductsList';

export default class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="container">

        <ProductsList />
      </div>
    );
  }
}
