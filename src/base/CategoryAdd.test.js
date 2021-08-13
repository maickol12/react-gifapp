import { shallow } from 'enzyme';
import CategoryAdd from '../components/CategoryAdd';
import '@testing-library/jest-dom';
describe('Prueba eb <CategoryAdd />',() => {

    const setCategory = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <CategoryAdd setCategory={ setCategory } /> );
    });


    test('debe de mostrarse correctamente',() => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto',() => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target:{ value } });

        expect( wrapper.find('p').text().trim() ).toBe( value )
    });

    test('No debe de postear la información con submit ',() => {
        wrapper.find('form').simulate('submit',{ preventDefault(){}});

        expect( setCategory ).not.toHaveBeenCalled();
    });

    test('debe de llamar el set category y limpiar la caja de texto',() => {
        const value = 'Hola Galaxia';
        wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{ preventDefault(){}})
        expect( setCategory ).toHaveBeenCalled( );
        expect( setCategory ).toHaveBeenCalledTimes( 1 );
        expect( setCategory ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
});