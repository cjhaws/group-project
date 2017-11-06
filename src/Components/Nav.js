import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        let { products, viewDetails, homeSelect } = this.props

        return (
            <div id="nav">
                <Navbar color="dark" dark>
                    <NavbarBrand href="/" className="mr-auto">As seen on TV</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink onclick={() => { homeSelect() }}>
                                    Home
                                </NavLink>
                            </NavItem>
                          {products.map(product => {
                              return (
                                <NavItem key={product.id}>
                                    <NavLink onClick={() => { viewDetails(product) }}>
                                      {product.name}
                                    </NavLink>
                                </NavItem>
                              )
                          })}
                            <NavItem>
                                <Link to="/checkout">
                                    <NavLink>
                                        Checkout
                                    </NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}