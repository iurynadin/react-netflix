import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
    it('renders <Profiles /> with populoated data', () => {
        const { container, getByTestId, getByText } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}} >
                        <Profiles.Picture src='/images/karl.png' data-testid="profile-picture" />
                        <Profiles.Name>Iury Nadin</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        )

        expect(getByText("Who's watching?")).toBeTruthy();
        expect(getByTestId("profile-picture")).toBeTruthy();
        expect(getByText("Iury Nadin")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders <Profiles /> with populoated data but misc profile image', () => {
        const { container, getByTestId, getByText } = render(
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => {}} >
                        <Profiles.Picture data-testid="profile-picture-misc" />
                        <Profiles.Name>Iury Nadin</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        )

        expect(getByText("Who's watching?")).toBeTruthy();
        expect(getByTestId("profile-picture-misc")).toBeTruthy();
        expect(getByText("Iury Nadin")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});