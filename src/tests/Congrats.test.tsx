import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import { findTestAtt } from './testUtils';
import { COMPONENT_DATA_TEST_ATT } from '../shared/Congrats.constants';

import Congrats from '../components/Congrats';

const setup = (props = { success: false }): ShallowWrapper => {
    return shallow(<Congrats {...props} />);
}

describe('Congrats component', () => {
    test('renders the component without errors', () => {
        const wrapper = setup();
        const component = findTestAtt(wrapper, COMPONENT_DATA_TEST_ATT);
        expect(component.length).toBe(1);
    });

    it('matches snapshot', () => {
        const componentTree = renderer.create(<Congrats success={false} />).toJSON();
        expect(componentTree).toMatchSnapshot();

    });
    
    test('renders an empty text when the success prop is false', () => {
        const wrapper = setup();
        const component = findTestAtt(wrapper, COMPONENT_DATA_TEST_ATT);
        expect(component.text()).toBe('');
    });
    
    test('renders the successfull message when the success prop is true', () => {
        const wrapper = setup({ success: true });
        const component = findTestAtt(wrapper, COMPONENT_DATA_TEST_ATT);
        expect(component.text()).toBe('Congratulations! You guessed the world');
    });
});
