import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import {Dashboard} from '../../containers/Dashboard';
import {Header} from '../../containers/Dashboard/Header';

const appRouter = () =>{
    return (
        <>
        <Header></Header>
        <Switch>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Redirect path="/dashboard/*" to="/dashboard/map"></Redirect>
        </Switch>
        </>
    )
}

export default withRouter(appRouter);


