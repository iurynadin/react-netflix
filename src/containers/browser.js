import React, { useContext, useState, useEffect } from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";
import * as ROUTES from "../constants/routes";
import logo from '../logo.svg';

export function BrowserContainer({ slides }) {

    const [ profile, setProfile ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log(`profile`, profile)
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            { loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="NetFlix" />
                        <Header.TextLink>Films</Header.TextLink>
                        <Header.TextLink>Series</Header.TextLink>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
                    <Header.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reprehenderit distinctio commodi cumque aliquid veritatis asperiores et, fuga eaque accusamus.
                    </Header.Text>
                </Header.Feature>
            </Header>
        </>

        
    ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}