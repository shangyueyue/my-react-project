import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading =()=> <div>Loading ...</div>
const Home = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../pages/Home/Home'),
    loading: Loading
});

const Main =Loadable({
    loader: () => import(/* webpackChunkName: "main" */ '../pages/Main/Main'),
    loading: Loading
});
const Mine = Loadable({
    loader: () => import(/* webpackChunkName: "mine" */ '../pages/Mine/Mine'),
    loading: Loading
});

const Sider =Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../pages/Sider/Sider'),
    loading: Loading
});
const Center = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ '../pages/Center/Center'),
    loading: Loading
});


const Routers = () => (
    <Router>
        <Switch>
            <Route  path="/home" 
                render={
                    ()=>
                    <Home>
                        <Route exact path='/home' component={Sider} />
                        <Route path='/home/center' component={Center} />
                    </Home>    
                } 
            />
            <Route path="/main" component={Main} />
            <Route path="/mine/:name" component={Mine} />
            <Redirect from="/user" to="/main" />
        </Switch>
    </Router>
);

export default Routers;
