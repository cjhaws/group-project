import React from 'react'
import Img from '../Images/bowl-brite.jpeg'
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
                                    The Bowl bright is the best way to make your toilet a party. If you purchase this product you'll essentially be flushing all of your troubles of aiming in the night time away. Our patented light emitting diode to toilet water technology helps you see the bowl no matter how dark it is. If you don't want to buy it after reading all of that i don't know what is wrong with you.
                                </p>
                                <div>
                                    Price:
                                </div>
                                <div>
                                    $14.95
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