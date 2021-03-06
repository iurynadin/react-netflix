import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

import * as ROUTES from './constants/routes'; 

export default function App() {
    
    const { user } = useAuthListener();
    console.log('user', user);

    return (
        <Router>
            <Switch>
                <IsUserRedirect 
                    user={user} 
                    loggedInPath={ROUTES.BROWSE} 
                    path={ROUTES.SIGN_IN}
                    exact
                >
                    <Signin />
                </IsUserRedirect>

                <IsUserRedirect 
                    user={user} 
                    loggedInPath={ROUTES.BROWSE} 
                    path={ROUTES.SIGN_UP}
                    exact
                >
                    <Signup />
                </IsUserRedirect>

                <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
                    <Browse />
                </ProtectedRoute>

                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.HOME}
                    exact
                >
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    )
}
