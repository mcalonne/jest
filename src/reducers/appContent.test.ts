import { Store } from 'redux';
import { RootState } from '.';
import { mutateMockStoreContent, storeFactory } from '../tests/testUtils';
import { addGuessedWord, setSecretWord } from '../actions';

describe('test appContentReducer actions', () => {
    const mockSecretWord = 'mysecretword';
    let store: Store<RootState>;

    beforeEach(() => {
        store = storeFactory();
    });

    it(`action SET_SECRET_WORD must set the secretWord to "${mockSecretWord}"`, () => {
        const expectedState = mutateMockStoreContent({
            secretWord: mockSecretWord,
        });
        store.dispatch(setSecretWord(mockSecretWord));
        expect(store.getState()).toEqual(expectedState);
    });

    it(`action ADD_GUESSED_WORD must add the guessWord to the guessedWords array`, () => {
        const guessWord = [{ word: 'apple', lettersMatchedCount: 3 }];
        const expectedState = mutateMockStoreContent({
            guessedWords: guessWord
        });
        store.dispatch(addGuessedWord(guessWord[0].word, guessWord[0].lettersMatchedCount));
        expect(store.getState()).toEqual(expectedState);
    });
});