import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { SelectProfileContainer } from "../../containers/profiles"
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Profiles />', () => {
    it('renede the <Profiles/>', () => {
        const user = { displayName: 'Iury', photoURL: 'profile.png' };
        const setProfile = jest.fn();

        const { getByTestId } = render(
            <Router>
                <SelectProfileContainer user={user} setProfile={setProfile} />
            </Router>
        );

        fireEvent.click(getByTestId('user-profile'))
        expect(setProfile).toHaveBeenCalled();
    });
});