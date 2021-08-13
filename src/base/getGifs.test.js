import { getGifs } from "../helper/getGifs";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas con getGifs Fetch',() => {
    test('debe de traer 10 elementos', async() => {
        const limit = 10;
        const gifs = await getGifs('Dragon ball',limit);
        console.log(gifs.length);
        expect( gifs.length ).toBe( limit );
    })
});