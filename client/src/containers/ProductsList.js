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
  }

  render() {
    return (
      <div className="container">
        <h1 className="title text-center">Products</h1>
        <div className="row">
          <div className="ml-md-auto col-md-4">
            <Category handleChange={this.handleCategories}/>
          </div>
          <div className="ml-md-auto col-md-4">
            <Price handleChange={this.handlePrices} />
          </div>
        </div>
        <div className="row">
        <div className="card-deck">
        { this.props.products.map((p, i) =>
          <div className="col-sm-4" key={i}>
            <Product
              name={p.name}
              category={p.category}
              price={p.price}
              image={p.image}
              key={i}
            />
          </div>
        )}
        </div>
        </div>
        <div className="row">
          <div className="col-md">
          <Paginate
            productsCount={this.props.productsCount} />
        </div>
        </div>
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
