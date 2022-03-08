import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import { findCongratsComponent, findCongratsMessage } from './testUtils';
import { CONGRATULATIONS_SUCCESS_MSG } from '../shared/Congrats.constants';

import Congrats from '../components/Congrats';

const setup = (props = { success: false }): ShallowWrapper => {
    return shallow(<Congrats {...props} />);
}

describe('Congrats component', () => {
    it('renders the component without errors', () => {
        const wrapper = setup();
        const component = findCongratsComponent(wrapper);
        expect(component.length).toBe(1);
    });

    it('matches snapshot', () => {
        const componentTree = renderer.create(<Congrats success={false} />).toJSON();
        expect(componentTree).toMatchSnapshot();
    });
    
    test('success prop is false => the congrats message element should not exist', () => {
        const wrapper = setup();
        const component = findCongratsMessage(wrapper);
        expect(component.exists()).toBe(false);
    });
    
    test('success prop is true => the congrats message is displayed', () => {
        const wrapper = setup({ success: true });
        const component = findCongratsMessage(wrapper);
        expect(component.text()).toBe(CONGRATULATIONS_SUCCESS_MSG);
    });
});
