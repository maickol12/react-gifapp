import { GifGridItem } from "../components/GifGridItem";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Prueba <GifGridItem />',() => {
    const title = 'Un título';
    const url   = 'https://localhost/algo.jpg';
    const wraper = shallow( <GifGridItem title={title} url={url} /> );

    test('debe de mostrar <GifGridItem /> correctamente', () => {
        expect ( wraper ).toMatchSnapshot();
    });
    
    test('debe de tener un parrago con el title', () => {
        const p = wraper.find('p');
        
        expect( p.text().trim() ).toBe( title );
    }); 
    test('debe de tener la imagen igual al url y alt de los props',() => {
        const img = wraper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    test('debe de tener animate__fadeIn_10s', () => {
        const div = wraper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn_10s') ).toBe( true );
    });
});