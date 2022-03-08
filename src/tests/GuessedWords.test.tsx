import { shallow, ShallowWrapper } from 'enzyme';
import { findGuessedWordsComponent, findGuessedInstructions, findGuessedWords, findGuessedWordNodes } from './testUtils';
import GuessedWords from '../components/GuessedWords';
import { GUESS_INSTRUCTIONS_MSG } from '../shared/Congrats.constants';

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
        const component = findGuessedWordsComponent(wrapper);
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess the word', () => {
        const instructions = findGuessedInstructions(wrapper);
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
        const component = findGuessedWordsComponent(wrapper);
        expect(component.length).toBe(1);
    });

    it('renders the guessed words section', () => {
        const guessedWordsNode = findGuessedWords(wrapper);
        expect(guessedWordsNode.length).toBe(1);
    });

    it('renders the correct number of guessed word element', () => {
        const guessedWordNodes = findGuessedWordNodes(wrapper);
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});