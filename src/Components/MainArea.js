import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Nav from './Nav'
import ProductCard from './ProductCard';
import ProductView from './product-view';
import CartSummary from './cart-summary'
import CheckoutView from './checkout-view'

import * as cart from '../configuration/cart'

// product images
const betterMarriageImg = require('../Images/bettermarriage.jpg')
const bowlBriteImg = require('../Images/bowl-brite.jpeg')
const chinpillaImg = require('../Images/chinpilla.jpg')
const neckMagicImg = require('../Images/neck-magic.JPG')
const pottyPutterImg = require('../Images/potty-putter.jpg')
const saunaPantsImg = require('../Images/sauna-pants2.png')
const snuggieImg = require('../Images/snuggie.jpg')
const turbieTwistImg = require('../Images/turbie-twist.jpg')
const waxVacImg = require('../Images/wax-vac.jpg')

const products = [
  {
    id: 1,
    name: "Better Marriage",
    // company: "Spank Me, Inc",
    description: "Get Sweaty",
    imageUrl: betterMarriageImg
  },
  {
    id: 2,
    name: "Bowl Brite",
    // company: "Sparkly White", Inc.
    description: "Sparkly",
    imageUrl: bowlBriteImg
  },
  {
    id: 3,
    name: "China Pilla",
    // company: "Some Company, Inc",
    description: "Give your chin a break",
    imageUrl: chinpillaImg
  },
  {
    id: 4,
    name: "NecK Magic",
    // company: "Some Company, Inc",
    description: "Magic around your neck",
    imageUrl: neckMagicImg
  },
  {
    id: 5,
    name: "Potty Putter",
    // company: "Some Company, Inc",
    description: "Poop & Putt",
    imageUrl: pottyPutterImg
  },
  {
    id: 6,
    name: "Sauna Pants",
    // company: "Some Company, Inc",
    description: "Sweaty ballz",
    imageUrl: saunaPantsImg
  },
  {
    id: 7,
    name: "Snuggie",
    // company: "Some Company, Inc",
    description: "Snuggle Up",
    imageUrl: snuggieImg
  },
  {
    id: 8,
    name: "Turbie Twist",
    // company: "Some Company, Inc",
    description: "Keep that thing wrapped",
    imageUrl: turbieTwistImg
  },
  {
    id: 9,
    name: "Wax Vac",
    // company: "Some Company, Inc",
    description: "Suck it out",
    imageUrl: waxVacImg
  },
]

class MainArea extends Component {
    constructor() {
        super();
        this.state = {
            activePage: 'home',
            selectedProduct: undefined,
            cart: (cart.getCart()) ? cart.getCart() :[],
            products: products
        }
    }

    updateCartState = () => {
        this.setState({ cart: cart.getCart() })
    }

    removeProduct = (product) => {
        cart.removeProductFromCart(product)
        this.updateCartState()
    }

    handleAddProductToCart = (product) => {
        cart.addProductToCart(product)
        this.setState({
          selectedProduct: undefined,
          activePage: 'home',
          cart: this.getCart()
        })
    }

    handleViewDetails = (product) => {
        this.setState({
          selectedProduct: product,
          activePage: 'view'
        })
    }

    handleShowOptions = () => {
        // just clear selectedProduct out of state
      this.setState({
        selectedProduct: undefined,
        activePage: 'home'
      })
    }

    handleShowCheckout = () => {
        this.setState({
          activePage: 'checkout'
        })
    }

    getCart = () => {
        return cart.getCart()
    }

    clearCart = () => {
        cart.clear()
        this.setState({
          cart: cart.getCart()
        })
    }

    render () {
        const productCards = this.state.products.map(product => {
            return (
                <Col sm="4">
                    <ProductCard
                      key={product.id}
                      product={product}
                      clickAction={this.handleAddProductToCart}
                      viewProduct={this.handleViewDetails}
                    />
                </Col>
            )
        })

        const productOptions = !(this.state.selectedProduct) && this.state.activePage === 'home' ? (
          <Row>{productCards}</Row>
        ) : null

        const productView = (this.state.selectedProduct) && this.state.activePage === 'view' ? (
          <ProductView product={this.state.selectedProduct} backAction={this.handleShowOptions} />
        ) : null

        const cartSummary = this.state.cart.length > 0 && this.state.activePage !== 'checkout' ? (
          <CartSummary products={this.state.cart} showCheckout={this.handleShowCheckout} />
        ) : null

        const checkoutView = this.state.activePage === 'checkout' ? (
          <CheckoutView products={this.state.cart} removeFromCart={this.removeProduct} backHome={this.handleShowOptions} />
        ) : null

        return (
          <div>
              <Nav products={this.state.products} viewDetails={this.handleViewDetails} homeSelect={this.handleShowOptions} />
              <div id="content">
                  <Container fluid>
                    {cartSummary}
                    {checkoutView}
                    {productOptions}
                    {productView}
                  </Container>
              </div>
          </div>
        )
    }
}

export default MainArea;