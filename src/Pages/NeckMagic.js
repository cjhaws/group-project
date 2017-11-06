import React from 'react'
import Img from '../Images/neck-magic.JPG'
import { Button, Jumbotron} from 'reactstrap'
import {Image} from 'react-bootstrap'
import Nav from '../Components/Nav'


export default () => {
    return (
        <div id="body">
            <main>
                <div>
                    <Nav/>
                    <div id="content">
                        <div id="image">
                            <Image object src={Img} alt="Neck Magic" />
                        </div>
                        <div>
                            <Jumbotron>
                            <p>
                                Absolutely no negative can be said about the Neck Magic. If you don't like stress and you have a neck this product is for you. Our engineers have designed this product to target your stress spots directly and eliminate them at the source. This will be the best investment in you professional life, marriage, and day to day humdrum. Find your happiness again with Neck Magic.
                            </p>
                            <div>
                                Price:
                            </div>
                            <div>
                                $19.95
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
        </div>
    )

}