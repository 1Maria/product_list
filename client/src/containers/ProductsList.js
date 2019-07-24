import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';

class ProductsList extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(({category, name, price, image}, i) => {
          return <Product key={i} category={category} name={name} price={price} image={image} />
        })}
      </div>
    )
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(ProductsList);
