import { applyMiddleware, createStore, Store } from 'redux';
import { WrapperType } from '../types/Guessed.app';
import { DATA_TEST_ELEMENTS } from '../shared/Testing.constants';
import { REDUX_MIDDLEWARES } from '../config-store';
import rootReducer, { RootState } from '../reducers';
import { defaultAppStatusState } from '../reducers/appStatus';
import { defaultAppContentState } from '../reducers/appContent';

// default store state for tests
export const defaultStoreState: RootState = {
    appStatus: defaultAppStatusState,
    appContent: defaultAppContentState,
}

/**
 * Returns a redux store (for tests)
 * @param {RootState} initialState
 * @returns {Store}
 */
export const storeFactory = (initialState: RootState = defaultStoreState): Store<RootState> => {
    return createStore(rootReducer, initialState, applyMiddleware(...REDUX_MIDDLEWARES));
}

type ReducerNames = keyof RootState; // list of allowed reducer names
// extracts the allowed properties from a given ReducerNames
// ex: Root { reducer1: { name: string; age: number }; reducer2: { type: string }}
// ReducerState<"reducer1"> => { name: string; age: number }
type ReducerState<ReducerName extends ReducerNames> = {
    [Key in keyof RootState[ReducerName]]?: RootState[ReducerName][Key]; 
};
// type ValueOf<T> = T[keyof T];

const mutateMockStoreState = <ReducerName extends ReducerNames> (reducerName: ReducerName, mutations: ReducerState<ReducerName>) => {
    const mockState = { ...defaultStoreState };
    const mutatedValues = {};
    for(let [key, value] of Object.entries(mutations)){
        Object.defineProperty(mutatedValues, key, { value, enumerable: true });
    }
    Object.defineProperty(mockState, reducerName, { value: { ...mockState[reducerName], ...mutatedValues }, enumerable: true });
    return mockState;
}

export const mutateMockStoreStatus = (mutations: ReducerState<'appStatus'>) => mutateMockStoreState('appStatus', mutations);
export const mutateMockStoreContent = (mutations: ReducerState<'appContent'>) => mutateMockStoreState('appContent', mutations);

/**
 * Finds a given HTML element by its data-test attribute.
 * @param {WrapperType} wrapper the jest wrapper (shallow or mount)
 * @param {string} dataTestValue the value of the data-test attribute to look for
 * @returns {WrapperType} The requested element (if found)
 */
export const findTestAtt = (wrapper: WrapperType, dataTestValue: string): WrapperType => {
    return wrapper.find(`[data-test='${dataTestValue}']`);
}

export const findApp = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.APP_COMPONENT);
export const findCongratsComponent = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.CONGRATS_COMPONENT);
export const findCongratsMessage = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.CONGRATS_MESSAGE);
export const findInputComponent = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.INPUT_COMPONENT);
export const findInputBox = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.INPUT_BOX);
export const findSubmitButton = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.SUBMIT_BUTTON);
export const findGuessedWordsComponent = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.GUESSED_WORDS_COMPONENT);
export const findGuessedInstructions = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.GUESSED_INSTRUCTIONS);
export const findGuessedWords = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.GUESSED_WORDS);
export const findGuessedWordNodes = (wrapper: WrapperType) => findTestAtt(wrapper, DATA_TEST_ELEMENTS.GUESSED_WORD);
