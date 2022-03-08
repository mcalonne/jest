import { mount, ReactWrapper } from 'enzyme';
import { findInputComponent, findInputBox, findSubmitButton, defaultStoreState } from './testUtils';
import { WrapperType } from '../types/Guessed.app';
import { Provider } from 'react-redux';
import { storeFactory } from './testUtils';

import Input from '../components/Input';
import { RootState } from '../reducers';

// mock the useState react hook
let mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState: string) => [initialState, mockSetCurrentGuess]
}));

const setup = (state: RootState = defaultStoreState): ReactWrapper => {
    const store = storeFactory(state);
    return mount(<Provider store={store}><Input /></Provider>);
}

it('should render without errors', () => {
    expect(findInputComponent(setup()).length).toEqual(1);
});

describe('state controlled input field', () => {
    let wrapper: ReactWrapper;
    
    beforeEach(() => {
        wrapper = setup();
        mockSetCurrentGuess.mockClear();
    });

    it('should update the currentGuess when the input box value is changing', () => {
        const inputBox = findInputBox(wrapper);
        inputBox.simulate('change', { target: { value: 'eureka' } });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('eureka')
    });

    it('should do nothing if the input box is empty when the submit button is clicked', () => {
        const submitBtn = findSubmitButton(wrapper);
        submitBtn.simulate('click', { preventDefault() {} });
        expect(mockSetCurrentGuess).toBeCalledTimes(0);
    });

    it('should clear the currentGuess value when the submit button is clicked', () => {
        const inputBox = findInputBox(wrapper);
        const submitBtn = findSubmitButton(wrapper);
        inputBox.simulate('change', { target: { value: 'eureka' } });
        submitBtn.simulate('click', { preventDefault() {} });
        expect(mockSetCurrentGuess).toBeCalled();
    });

});

describe('rendering', () => {
    let wrapper: ReactWrapper;
    let inputBox: WrapperType;
    let submitBtn: WrapperType;
    
    const checkInputAndSubmitBtnVisibility = (wordGuessed: boolean, expectedElementFound: number) => {
        const state: RootState = { 
            ...defaultStoreState, 
            appStatus: { 
                ...defaultStoreState.appStatus, 
                isWordGuessed: wordGuessed 
            } 
        };
        wrapper = setup(state);
        inputBox = findInputBox(wrapper);
        submitBtn = findSubmitButton(wrapper);
        expect(inputBox.length).toBe(expectedElementFound);
        expect(submitBtn.length).toBe(expectedElementFound);
    }

    describe('success is true => the word has been guessed', () => {
        it('the input box and submit button should not be displayed', () =>  {
            checkInputAndSubmitBtnVisibility(false, 1);
        });
    });

    describe('success is false => the word has NOT been guessed', () => {
        it('the input box and submit button should be displayed', () =>  {
            checkInputAndSubmitBtnVisibility(true, 0);
        });
    });
});