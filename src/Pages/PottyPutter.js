import React from 'react'
import Img from '../Images/potty-putter.jpg'
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
                                    Do you like waisting a lot of time and being a useless member of society? Do you like escaping the existential crisis brought on by an fiery bowel movement? Do you like golf? If any of those prior statements apply to you this gimmicky toy is absolutely the right fit for you. The urine slash resistant mound will deflect any and all of the mistakes that will happen in the presence of this bathroom buddy. Out product will not disappoint.
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