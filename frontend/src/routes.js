import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/profile';
import NewIncident from './pages/newIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon}/>
                <Route path='/Register' component={Register}/>
                <Route path='/Profile' exact component={Profile}/>
                <Route path='/profile/new' component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}
