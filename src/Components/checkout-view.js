import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'

export default class CheckoutView extends Component {
  render () {
    let { products, removeFromCart, backHome } = this.props

    return (
      <main>
        <div>Checkout Page</div>
        <div>
          <Button color="primary" onClick={() => { backHome() }}>Back to Home</Button>
          {products.map((product, idx) => {
            return (
              <Row key={idx} className="mb-2">
                <Col>
                  Product:
                </Col>
                <Col>
                  {product.name}
                </Col>
                <Col>
                  <Button color="secondary" onClick={() => { removeFromCart(product) }}>
                    X Remove
                  </Button>
                </Col>
              </Row>
            )
          })}
        </div>
      </main>
    )
  }
}