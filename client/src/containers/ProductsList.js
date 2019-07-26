import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchProducts, fetchProductsCount } from '../actions';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import Category from '../components/Category';
import Price from '../components/Price';

class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      price: ''
    }
    this.handleCategories=this.handleCategories.bind(this);
    this.handlePrices=this.handlePrices.bind(this);
  }

  componentDidMount(){
    const currentPage = this.props.match.params.page || 1;
    this.props.fetchProducts(currentPage);
    this.props.fetchProductsCount();
  }

  componentDidUpdate(previousProps){
    if (previousProps.match.params.page !== this.props.match.params.page) {
      this.props.fetchProducts(this.props.match.params.page, this.state.category, this.state.price);
    }
  }

  handleCategories(e){
    this.setState({category: e.target.value});
    this.props.fetchProducts(1, e.target.value, this.state.price);
    this.props.fetchProductsCount(e.target.value);
    this.props.history.push('/products/1');
  }

  handlePrices(e){
    this.setState({price: e.target.value});
    this.props.fetchProducts(1, this.state.category, e.target.value);
    //this.props.fetchProductsCount(e.target.value);
    //this.props.history.push('/products/1');
  }

  render() {
    return (
      <div>
        <Category handleChange={this.handleCategories}/>
        <Price handleChange={this.handlePrices} />
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
