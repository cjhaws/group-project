import React from 'react'
import Img from '../Images/bettermarriage.jpg'
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
                                    The Better Marriage Blanket is the first and only blanket to keep your farts in the
                                    sheets. It will truly save your marriage from the catastrophe of after dinner
                                    flatulation. Every couple can benefit from such a great advance in technology.
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
        </div>
    )

}