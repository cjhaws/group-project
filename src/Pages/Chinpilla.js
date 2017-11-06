import React from 'react'
import Img from '../Images/chinpilla.jpg'
import { Button, Jumbotron} from 'reactstrap'
import Nav from '../Components/Nav'
import {Image} from 'react-bootstrap'

export default () => {
    return (
        <div id="body">
            <main>
                <div>
                    <Nav/>
                    <div id="content">
                        <div id="image">
                            <Image object src={Img} alt="Bowl Brite" height="400px" responsive/>
                        </div>
                        <div>
                            <Jumbotron>
                                <p>
                                    The Chinpilla is an absolute must for any travel or even just passing out drunk on the couch. So its implied if you drink or travel you should invest in the chinpilla. You'll get your money back in the form of good nights sleep. We guarantee it.
                                </p>
                                <div>
                                    Price:
                                </div>
                                <div>
                                    $18.95
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