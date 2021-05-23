import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Header } from "../../components"
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

describe('<Header />', () => {
    it('renders the basic <Header /> with a background', () => {
        const { container, getByText, getByTestId } = render(
            <Header>
                <Header.Frame>
                    <Router>
                        <Header.Logo to="/" alt="Netflix" src="/logo.svg" />
                        <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
                    </Router>
                </Header.Frame>
            </Header>
        );

        expect(getByText('Hello I am a link!')).toBeTruthy();
        expect(getByTestId('header-bg')).toBeTruthy();
        // expect(container.firstChild).toMatchSnapshot();
    });


    it('renders the basic <Header /> without a background', () => {
        const { container, getByText, queryByTestId } = render(
            <Router>
                <Header bg={false}>
                    <Header.Frame>
                        <Header.Logo to={ROUTES.HOME} src="/logo.svg" alt="Netflix" />
                        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
                        <Header.TextLink active={false}>Hello I am a link!</Header.TextLink>
                    </Header.Frame>
                </Header>
            </Router>
        );
    
        expect(getByText('Hello I am a link!')).toBeTruthy();
        expect(queryByTestId('header-bg')).toBeFalsy();
        // expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the full <Header> with a background', () => {
        const { container, getByText, getByTestId } = render(
            <Router>
                <Header src="joker1" dontShowOnSmallViewPort>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
                            <Header.TextLink active={false} onClick={() => {}}>
                                Series
                            </Header.TextLink>
                            <Header.TextLink active onClick={() => {}}>
                                Films
                            </Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
                            <Header.Profile>
                                <Header.Picture src="/images/karl.png" />
                                <Header.Dropdown>
                                    <Header.Group>
                                        <Header.Picture src="/images/karl.png" />
                                        <Header.TextLink>Karl Hadwen</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame>
            
                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>Forever alone in a crowd...</Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header>
            </Router>
        );

        expect(getByTestId('search-input')).toBeTruthy();
        expect(getByTestId('search-input').value).toBe('Joker');
        fireEvent.change(getByTestId('search-input'), { target: { value: 'Simpsons' } });
        fireEvent.click(getByTestId('search-click'));

        expect(getByText('Series')).toBeTruthy();
        expect(getByText('Films')).toBeTruthy();
        expect(getByText('Karl Hadwen')).toBeTruthy();
        expect(getByText('Watch Joker Now')).toBeTruthy();
        expect(getByText('Sign out')).toBeTruthy();
        expect(getByText('Forever alone in a crowd...')).toBeTruthy();
        expect(getByText('Play')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
    
});

