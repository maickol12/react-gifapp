import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Probando <GifExpertApp />',() => {
    const wrapper = shallow(<GifExpertApp />);
    test('Debe mostrarse correctamente',() => {
        expect( wrapper ).toMatchSnapshot(); 
    });
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['Mamberroi','One Punch'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('CategoryGifGrid').length ).toBe( categories.length );
    })
});
