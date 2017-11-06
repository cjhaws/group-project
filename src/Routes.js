import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
/*import BMB from './Pages/Bettermarriage';
import BowlB from './Pages/Bowlbrite';
import Chinpilla from './Pages/Chinpilla';
import NeckMagic from "./Pages/NeckMagic";
import PottyPutter from "./Pages/PottyPutter";
import SaunaPants from "./Pages/SaunaPants";
import Snuggie from "./Pages/Snuggie";
import TurbieTwist from "./Pages/TurbieTwist";
import WaxVac from "./Pages/WaxVac";
import Checkout from './Pages/Checkout';*/

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            {/*<Route path="/better-marriage" component={BMB}/>
            <Route path="/bowl-brite" component={BowlB}/>
            <Route path="/chinpilla" component={Chinpilla}/>
            <Route path="/neck-magic" component={NeckMagic}/>
            <Route path="/potty-putter" component={PottyPutter}/>
            <Route path="/sauna-pants" component={SaunaPants}/>
            <Route path="/snuggie" component={Snuggie}/>
            <Route path="/turbie-twist" component={TurbieTwist}/>
            <Route path="/wax-vac" component={WaxVac}/>
            <Route path="/checkout" component={Checkout}/>*/}
        </Switch>
    </Router>
);