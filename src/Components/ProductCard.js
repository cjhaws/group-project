import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.clickAction(this.props.product)
    }

    handleView = () => {
        this.props.viewProduct(this.props.product)
    }

    render () {
        let { name, description, imageUrl } = this.props.product;
        return (
            <div>
                <Card id="card">
                    <div style={{width: '100%', maxHeight: 200, overflow: 'hidden'}}>
                        <CardImg top width="100%" src={imageUrl} alt={name} />
                    </div>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        {/*<CardSubtitle>{company}</CardSubtitle>*/}
                        <CardText>{description}</CardText>
                        <Button color="primary" onClick={this.handleClick}>Add To Cart</Button>
                        <Button color="link" onClick={this.handleView}>View Details</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default ProductCard;