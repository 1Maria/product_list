import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import { fetchProducts } from '../actions';
import { bindActionCreators } from 'redux';

class ProductsList extends Component {
  componentDidMount(){
    this.props.fetchProducts();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        { this.props.products.map(p =>
          <Product
            name={p.name}
            category={p.category}
            price={p.price}
            image={p.image}
          />) }
      </div>
    )
  }
}

function mapStateToProps({ products }) {
  console.log(products);
  return {
    products
  };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
