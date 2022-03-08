import { getLetterMatchCount } from './helpers';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';

    const countTestFn = (guessWord: string, expectedMatchLettersCount: number = 0) => {
        const matchLettersCount = getLetterMatchCount(guessWord, secretWord);
        expect(matchLettersCount).toBe(expectedMatchLettersCount);
    };

    it('returns the correct count when no matching letters', () => {
        countTestFn('xbox');
    });

    it('returns the correct count when there are 3 matching letters', () => {
        countTestFn('train', 3);
    });

    it('returns the correct count when there are duplicate letters in the guess', () => {
        countTestFn('parka', 3);
    });
});