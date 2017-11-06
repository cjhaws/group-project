import React from 'react'
import Img from '../Images/wax-vac.jpg'
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
                                    Incredibly gimmicky but how can you beat that deal?
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