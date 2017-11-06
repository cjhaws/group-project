import React from 'react'
import Img from '../Images/snuggie.jpg'
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
                                    Seriously just go look up the Snuggie. The results will speak for themselves. If you dont know what this is how do you even have access to the internet?
                                </p>
                                <div>
                                    Price:
                                </div>
                                <div>
                                    $29.95
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