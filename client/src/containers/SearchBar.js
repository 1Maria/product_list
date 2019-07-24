import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value },
        () => {
        this.props.fetchProducts(this.state.term)
    });
  }

//   onFormSubmit(event) {
//     event.preventDefault();

//     // We need to go and fetch product data

//     //this.setState({ term: '' });
//   }

  render() {
    return (
      <form className="input-group">
        <label htmlFor="search">search</label>
        <input
          name="search"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
