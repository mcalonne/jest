import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getLetterMatchCount } from '../shared/helpers';
import { RootState } from '../reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// typed useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// redux actions
export const ACTIONS = {
    NEW_GUESS_TRY: 'NEW_GUESS_TRY',
    WORD_GUESSED: 'WORD_GUESSED',
    GIVEN_UP: 'GIVEN_UP',
    ADD_GUESSED_WORD: 'ADD_GUESSED_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
    RESET: 'RESET',
}

/**
 * Function to use to make a new guess try
 * @param {string} guessWord 
 * @returns {ThunkAction}
 */
export const handleNewGuessTry = (guessWord: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    return (dispatch, getState) => {
        dispatch(newGuessTry());
        const secretWord = getState().appContent.secretWord;
        const countLetters = getLetterMatchCount(guessWord, secretWord);
        dispatch(addGuessedWord(guessWord, countLetters));
        if (guessWord === secretWord) {
            dispatch(wordGuessed());
        }
    }
}

export const newGuessTry = () => ({ type: ACTIONS.NEW_GUESS_TRY })

export const addGuessedWord = (word: string, lettersMatchedCount: number) => ({
    type: ACTIONS.ADD_GUESSED_WORD, 
    payload: { word, lettersMatchedCount } 
})

export const setSecretWord = (secretWord: string) => ({
    type: ACTIONS.SET_SECRET_WORD,
    payload: { secretWord }
})

export const wordGuessed = () => ({ type: ACTIONS.WORD_GUESSED });

export const giveUp = () => ({ type: ACTIONS.GIVEN_UP });

export const reset = () => ({ type: ACTIONS.RESET });

export const getSecretWord = async (): Promise<string> => {
    // TODO: implements then make it a redux action
    return axios.get('http://localhost:3000').then(resp => resp.data);
}
