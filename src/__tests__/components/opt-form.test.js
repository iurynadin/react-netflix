import React from 'react'
import { render } from '@testing-library/react'
import { OptForm } from '../../components'

describe('<OptForm />', () => {
    it('redenrs the <OptForm /> with populated data', () => {
        const { container, getByText, getByPlaceholderText } = render(
            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch?</OptForm.Text>
            </OptForm>
        );

        expect(getByText('Try it Now')).toBeTruthy();
        expect(getByText('Ready to watch?')).toBeTruthy();
        expect(getByPlaceholderText('Email address')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});