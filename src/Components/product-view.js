import React, { Component } from 'react';
import { Button, Jumbotron} from 'reactstrap'
import { Image } from 'react-bootstrap'

export default class ProductView extends Component {
  render () {
    let { product } = this.props

    return (
      <main>
        <Button color="primary" size="sm" onClick={this.props.backAction}>
          {'<'} Back to Product Options
        </Button>
        <div>
          <div id="content">
            <div id="image">
              <Image src={product.imageUrl} alt={product.name} />
            </div>
            <div>
              <Jumbotron>
                <p>
                  {product.description}
                </p>
                <div>
                  Price:
                </div>
                <div>
                  $16.95
                </div>
                <Button color="primary">
                  Add to cart
                </Button>
              </Jumbotron>
            </div>
          </div>

        </div>
        <div>

        </div>
      </main>
    )
  }
}