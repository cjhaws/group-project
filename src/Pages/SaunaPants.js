import React from 'react'
import Img from '../Images/sauna-pants2.png'
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
                                    Have you ever wanted to loose weight while also doing nothing but sitting down? If yes then keep reading because you absolutely must own this essential piece of modern living! You will love the results that you receive from our amazing weight loss system. Make others jealous of what you have between your muffin top and upper knee.
                                </p>
                                <div>
                                    Price:
                                </div>
                                <div>
                                    $39.95
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