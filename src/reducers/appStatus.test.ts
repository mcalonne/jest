import { Store } from 'redux';
import { RootState } from '.';
import { mutateMockStoreStatus, storeFactory } from '../tests/testUtils';
import appStatusReducer, { defaultAppStatusState } from './appStatus';
import { giveUp, newGuessTry, wordGuessed } from '../actions';

it('test default state', () => {
    const state = appStatusReducer(undefined, { type: 'unknown' });
    expect(state).toStrictEqual(defaultAppStatusState)
});

describe('test appStatusReducer actions', () => {
    let store: Store<RootState>;
    let state: RootState;

    beforeEach(() => {
        store = storeFactory();
        state = store.getState();;
    });

    it('action NEW_GUESS_TRY must increase the number of attempts by 1', () => {
        const expectedState = mutateMockStoreStatus({
            numberOfAttempts: state.appStatus.numberOfAttempts + 1,
        });
        store.dispatch(newGuessTry());
        expect(store.getState()).toEqual(expectedState);
    });

    it('action WORD_GUESSED must update isWordGuessed to true', () => {
        const expectedState = mutateMockStoreStatus({
            isWordGuessed: true,
        });
        store.dispatch(wordGuessed());
        expect(store.getState()).toEqual(expectedState);
    });

    it('action GIVEN_UP must update hasGivenUp to true', () => {
        const expectedState = mutateMockStoreStatus({
            hasGivenUp: true,
        });
        store.dispatch(giveUp());
        expect(store.getState()).toEqual(expectedState);
    });
});