import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { findApp, findInputBox, findSubmitButton, findGuessedWordNodes } from '../tests/testUtils';
import { WrapperType } from '../types/Guessed.app';
import GuessWordApp from './App';
import { storeFactory, defaultStoreState } from '../tests/testUtils';
import { defaultAppContentState } from '../reducers/appContent';
import { defaultAppStatusState } from '../reducers/appStatus';
import { RootState } from '../reducers';

// activate global mock
jest.mock('../actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from '../actions'; // TODO: to implement

let mockSecretWord: string;

const _simulateGuessWord = (wrapper: ReactWrapper, guessWord: string) => {
    const inputBox = findInputBox(wrapper);
    inputBox.simulate('change', { target: { value: guessWord } });

    const submitBtn = findSubmitButton(wrapper);
    submitBtn.simulate('click', { preventDefault() {} });
}

const setup = async (state: RootState = defaultStoreState): Promise<ReactWrapper> => {
    const store = storeFactory(state);
    const wrapper = mount(<Provider store={store}><GuessWordApp /></Provider>);
    _simulateGuessWord(wrapper, 'train');
    return wrapper;
}

it('should render the GuessWordApp', async () => {
    const wrapper = await setup();
    const app = findApp(wrapper);
    expect(app.exists()).toBe(true);
});

// TODO: TOFIX
describe.skip('no words guessed', () => {
    let wrapper: WrapperType;

    beforeEach(async () => {
        wrapper = await setup({
            appStatus: { ...defaultAppStatusState },
            appContent: { ...defaultAppContentState, secretWord: 'party' }
        });
    });

    it('creates guessedWords table with 1 row', () => {
        const guessedWordNodes = findGuessedWordNodes(wrapper);
        expect(guessedWordNodes).toHaveLength(1);
    });
});

describe.skip('some words guessed', () => {
    let wrapper: WrapperType;

    beforeEach(async () => {
        wrapper = await setup({
            appStatus: { ...defaultAppStatusState },
            appContent: { 
                ...defaultAppContentState, 
                secretWord: 'party', 
                guessedWords: [{ word: 'train', lettersMatchedCount: 3 }] 
            }
        });
        _simulateGuessWord(wrapper, 'apple');
    });
    
    it.todo('creates guessedWords table with 2 rows');

});

describe.skip('guess word found', () => {
    let wrapper: WrapperType;

    beforeEach(async () => {
        wrapper = await setup({
            appStatus: { ...defaultAppStatusState, isWordGuessed: true, numberOfAttempts: 2 },
            appContent: { 
                ...defaultAppContentState, 
                secretWord: 'party', 
                guessedWords: [{ word: 'train', lettersMatchedCount: 3 }] 
            }
        });
        _simulateGuessWord(wrapper, mockSecretWord);
    });

    it.todo('diplays the congrats message');

    it.todo('hides the input box and submit button');
});