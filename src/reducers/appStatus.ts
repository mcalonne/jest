import { ACTIONS } from '../actions';

// type of the AppStatus state
export type AppStatusState = {
    isWordGuessed: boolean;
    numberOfAttempts: number;
    hasGivenUp: boolean; // has the player abandonned ?
}

export const defaultAppStatusState = {
    isWordGuessed: false,
    numberOfAttempts: 0,
    hasGivenUp: false,
}

const appStatusReducer = (state: AppStatusState = defaultAppStatusState, action: { type: string }) => {
    switch(action.type) {
        case ACTIONS.NEW_GUESS_TRY:
            const newAttemptsCounter = state.numberOfAttempts + 1;
            return { ...state, numberOfAttempts: newAttemptsCounter }; 
        case ACTIONS.WORD_GUESSED: 
            return { ...state, isWordGuessed: true };
        case ACTIONS.GIVEN_UP:
            return { ...state, hasGivenUp: true }; 
        case ACTIONS.RESET:
            return { ...defaultAppStatusState };
    }
    return state;
}

export default appStatusReducer;