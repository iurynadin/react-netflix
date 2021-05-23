// import React from 'react'
import selectionFilter from "../../utils/selection-filter"

test('selecitonFilter with legitimate date ', () => {
    const series = [
        {
            title: 'Documentaries',
            data: [
                {
                    id: 'series-1x',
                    title: 'Tiger King',
                    description:
                        'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
                    genre: 'documentaries',
                    maturity: '18',
                    slug: 'tiger-king',
                },
            ],
        },
    ];
    const films = [
        {
            id: 'film-1x',
            title: 'The Prestige',
            description: 'Great film...',
            genre: 'drama',
            maturity: '15',
            slug: 'the-prestige',
        },
    ];

    const slides = selectionFilter({ series, films })
    expect(slides.films[0].title).toBe('Drama');
    expect(slides.films[0].data[0].description).toBe('Great film...');
    expect(slides.films[0].data[0].genre).toBe('drama');
    expect(slides.films[0].data[0].maturity).toBe('15');
    expect(slides.series[0].title).toBe('Documentaries');
    // expect(slides.series[0].data[0].data[0].title).toBe('Tiger King');
    // expect(slides.series[0].data[0].description).toBe('An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.');

    
});


test('selectionFilter with no data', () => {
    const slides = selectionFilter();
    expect(slides.series[0].title).toBe('Documentaries');
    expect(slides.films[0].title).toBe('Drama');
    expect(slides.series[0].data).toBe(undefined);
    expect(slides.films[0].data).toBe(undefined);
});