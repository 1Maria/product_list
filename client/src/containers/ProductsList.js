import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import { fetchProducts, fetchProductsCount } from '../actions';
import { bindActionCreators } from 'redux';
import Paginate from '../components/Paginate';
import { withRouter } from 'react-router-dom';

class ProductsList extends Component {
  componentDidMount(){
    const currentPage = this.props.match.params.page || 1;
    this.props.fetchProducts(currentPage);
    this.props.fetchProductsCount();
  }
  componentDidUpdate(previousProps){
    if (previousProps.match.params.page !== this.props.match.params.page) {
      this.props.fetchProducts(this.props.match.params.page);
    }
  }
  render() {
    console.log(this.props.match, "match")
    return (
      <div>
        { this.props.products.map(p =>
          <Product
            name={p.name}
            category={p.category}
            price={p.price}
            image={p.image}
          />) }
          <Paginate
            productsCount={this.props.productsCount} />
      </div>
    )
  }
}

function mapStateToProps({ products, productsCount }, ownProps) {
  console.log(ownProps);
  return {
    products,
    productsCount,
    ownProps
  };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchProducts, fetchProductsCount }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsList));
