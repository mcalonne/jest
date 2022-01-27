import { shallow, ShallowWrapper } from 'enzyme';
import { findTestAtt } from './testUtils';
import GuessedWords from '../components/GuessedWords';
import { COMPONENT_DATA_TEST_ATT, 
        GUESSED_INSTRUCTION_DATA_TEST_ATT,
        GUESSED_WORDS_DATA_TEST_ATT,
        GUESSED_WORD_DATA_TEST_ATT,
        GUESS_INSTRUCTIONS_MSG 
} from '../shared/GuessedWorlds.constants';

const defaultProps = {
    guessedWords: [
        { word: 'train', lettersMatchedCount: 3 }
    ],
}

const setup = (props = {}): ShallowWrapper => {
    const setupProps = { ...defaultProps, ...props,  };
    return shallow(<GuessedWords {...setupProps} />);
}

describe('if there are no words guessed', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    
    it('renders without errors', () => {
        const component = findTestAtt(wrapper, COMPONENT_DATA_TEST_ATT);
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess the word', () => {
        const instructions = findTestAtt(wrapper, GUESSED_INSTRUCTION_DATA_TEST_ATT);
        expect(instructions.text().length).not.toBe(0);
        expect(instructions.text()).toEqual(GUESS_INSTRUCTIONS_MSG);
    })


});

describe('if there are words guessed', () => {
    let wrapper: ShallowWrapper;
    const guessedWords = [
        { word: 'train', lettersMatchedCount: 3 },
        { word: 'agile', lettersMatchedCount: 1 },
        { word: 'party', lettersMatchedCount: 5 }
    ];
    
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    it('renders without errors', () => {
        const component = findTestAtt(wrapper, COMPONENT_DATA_TEST_ATT);
        expect(component.length).toBe(1);
    });

    it('renders the guessed words section', () => {
        const guessedWordsNode = findTestAtt(wrapper, GUESSED_WORDS_DATA_TEST_ATT);
        expect(guessedWordsNode.length).toBe(1);
    });

    it('renders the correct number of guessed word element', () => {
        const guessedWordNodes = findTestAtt(wrapper, GUESSED_WORD_DATA_TEST_ATT);
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});