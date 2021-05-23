import React from 'react'
import { render, screen } from '@testing-library/react'
import { Home } from "../../pages"
import { BrowserRouter as Router } from 'react-router-dom';

    test('description', () => {
        const { getByText, getAllByText, getAllByPlaceholderText } = render(
            <Router>
                <Home />
            </Router>
        );
        expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy()
        expect(getByText('Watch anywhere. Cancel at any time.')).toBeTruthy()
        expect(getAllByPlaceholderText('Email address')).toBeTruthy()
        expect(getAllByText('Try it Now')).toBeTruthy()
        expect(getAllByText('Ready to watch? Enter your email to createyour membership')).toBeTruthy()
    });

