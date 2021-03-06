import React from 'react'
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route 
            {...rest}
            render={() => {
                // console.log(user);
                if(!user){
                    return children;
                }
                if(user){
                    return (
                        <Redirect 
                            to={{ pathname: loggedInPath }}
                        />
                    );
                }
                return null;
            }}
        />
    )
}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
        <Route 
            {...rest}
            render={({ location }) => { //location to preserve history
                if(user) {
                    return children;
                }
                if(!user) {
                    return (
                        <Redirect
                            to={{ 
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                }
                return null;
            }}

        />
    )
}