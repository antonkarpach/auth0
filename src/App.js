import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Public from "./Public";
import Private from "./Private";
import Callback from "./Callback";
import Login from "./Login";
import { AuthProvider } from "./Auth";
import { PrivateRoute } from "./PrivateRoute";
import { Nav, NavLink } from "./Components";

function App() {
    return (
        <AuthProvider>
            <Nav>
                <NavLink to='/public' component={NavLink}>
                    Public
                </NavLink>
                <NavLink to='/private'>
                    Private
                </NavLink>
            </Nav>

            <Switch>
                <Route path="/public" component={Public}/>
                <Route path="/login" component={Login}/>
                <Route path="/callback" component={Callback}/>
                <PrivateRoute path="/private" component={Private}/>
                <Redirect to="/public"/>
            </Switch>
        </AuthProvider>
    );
}

export default App;
