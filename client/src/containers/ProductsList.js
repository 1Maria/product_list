import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchProducts, fetchProductsCount } from '../actions';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import Category from '../components/Category';

class ProductsList extends Component {
  constructor() {
    super();
    this.handleCategories=this.handleCategories.bind(this);
  }

  componentDidMount(){
    const currentPage = this.props.match.params.page || 1;
    this.props.fetchProducts(currentPage);
    this.props.fetchProductsCount();
  }

  componentDidUpdate(previousProps){
    if (previousProps.match.params.page !== this.props.match.params.page) {
      this.props.fetchProducts(this.props.match.params.page, this.state.category);
    }
  }

  handleCategories(e){
    this.setState({category: e.target.value});
    this.props.fetchProducts(1, e.target.value);
    this.props.fetchProductsCount(e.target.value);
    this.props.history.push('/products/1');
  }

  render() {
    return (
      <div>
        <Category handleChange={this.handleCategories}/>
        { this.props.products.map((p, i) =>
          <Product
            name={p.name}
            category={p.category}
            price={p.price}
            image={p.image}
            key={i}
          />) }
        <Paginate
            productsCount={this.props.productsCount} />
      </div>
    )
  }
}

function mapStateToProps({ products, productsCount }, ownProps) {
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
