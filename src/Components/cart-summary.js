import React, { Component } from 'react'
import { Row, Col, Button, Badge } from 'reactstrap'

export default class CartSummary extends Component {
  render () {
    let { products } = this.props

    return (
      <div className="text-right mb-3">
        <Button color="primary" onClick={() => { this.props.showCheckout() }}>
          Checkout
          <Badge color="link">{products.length}</Badge>
        </Button>
      </div>
    )
  }
}