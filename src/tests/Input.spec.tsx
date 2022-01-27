import { shallow, ShallowWrapper } from 'enzyme';
import { findTestAtt } from './testUtils';

import Input from '../components/Input';

const setup = (secretWord = 'party'): ShallowWrapper => {
    return shallow(<Input secretWord={secretWord} />);
}

describe('Input component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('should render without errors', () => {
        expect(findTestAtt(wrapper, 'input-component').length).toEqual(1);
    });
});