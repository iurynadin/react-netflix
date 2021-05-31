import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { act } from "react-dom/test-utils"
import { FirebaseContext } from "../../context/firebase"
import { Signup } from "../../pages"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

const firebase = {
    auth: jest.fn(() => ({
        createUserWithEmailAndPassword: jest.fn(() =>
            Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
        ),
    })),
  };

describe('<Singup />', () => {
    it('renders the sign in page with a form submission', async () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <Signup />
                </FirebaseContext.Provider>
            </Router>
        )
        
        await act(async () => {
            await fireEvent.change(getByPlaceholderText('First name'), {
                target: { value: 'Iury' }
            })
            await fireEvent.change(getByPlaceholderText('Email'), {
                target: { value: 'iurynadin@gmail.com' }
            })
            await fireEvent.change(getByPlaceholderText('Password'), {
                target: { value: 'password' }
            })
            fireEvent.click(getByTestId('sign-up'));

            expect(getByPlaceholderText('First name').value).toBe('Iury');
            expect(getByPlaceholderText('Email').value).toBe('iurynadin@gmail.com');
            expect(getByPlaceholderText('Password').value).toBe('password');
            expect(queryByTestId('error')).toBeFalsy();
        })
    });

    
});
