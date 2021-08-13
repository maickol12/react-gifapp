import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { CategoryGifGrid } from '../components/CategoryGifGrid';
import { useFetchGifs } from '../hooks/useFetchGif';
jest.mock('../hooks/useFetchGif');

const category = 'Mamberroi';

describe('Probando en el <CategoryGifGrid />',() => {
    
    test('Debe de mostrarse correctamente',() => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wraper = shallow(<CategoryGifGrid category={ category } />);
        expect( wraper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs',() => {
        const gif = [{
            id: 1,
            title: 'https://hola.jpg',
            url: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data: gif,
            loading: false
        },
        {
            data: gif,
            loading: false
        });
        const wraper = shallow(<CategoryGifGrid category={ category } />);
        
        expect( wraper ).toMatchSnapshot();
        expect( wraper.find('p').exists()).toBe( false );
        expect( wraper.find('GifGridItem').length).toBe(gif.length);

    });
});