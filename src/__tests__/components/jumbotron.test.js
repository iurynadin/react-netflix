import React from 'react'
import { getByText, render } from '@testing-library/react'
import { Jumbotron } from '../../components'
import jumboData from '../../fixtures/jumbo'

describe('<Jumbotron />', () => {
    it('renders the <Jumbotron /> with populated data', () => {
        const { container, getByText, getByAltText, getByTestId } = render(
            <Jumbotron.Container>
                {jumboData.map((item) => (
                    <Jumbotron key={item.id} direction={item.direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>

                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))}
            </Jumbotron.Container>
        )
        
        expect(getByText('Enjoy on your TV.')).toBeTruthy();
        expect(getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')).toBeTruthy();
        expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    
});