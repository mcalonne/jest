import { ACTIONS } from '../actions';
import { GuessedWord } from '../types/Guessed.app';
import { PayloadAction } from '@reduxjs/toolkit';

// type of the GuessedWords state
export type AppContentState = {
    secretWord: string;
    guessedWords: Array<GuessedWord>;
}

export const defaultAppContentState = {
    secretWord: '',
    guessedWords: [],
}

const appContentReducer = (state: AppContentState = defaultAppContentState, 
                           action: PayloadAction<{ word: string, secretWord: string, lettersMatchedCount: number }>
                          ) => {
    switch(action.type) {
        case ACTIONS.ADD_GUESSED_WORD:
            const newGuessedWord = { 'word': action.payload.word, 'lettersMatchedCount': action.payload.lettersMatchedCount };
            const guessedWords = [...state.guessedWords, newGuessedWord];
            return { ...state, guessedWords }; 
        case ACTIONS.SET_SECRET_WORD: 
            return { ...state, secretWord: action.payload.secretWord}
        case ACTIONS.RESET:
            return { ...defaultAppContentState };
    }
    return state;
}

export default appContentReducer;