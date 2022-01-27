import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Custom hook for preventing to use a setState on an unmounted component.
 * The state type could be any types (ex: string, array, complex object, etc.)
 * @param initialStateValue the initial value of the state (not null).
 * @returns a tuple with 2 elements: the value of the state and a function to update the state.
 */
const useSafeState = <StateType> (initialStateValue: StateType): [StateType, (newValue: StateType) => void] => {
    const isComponentMounted = useRef(true);
    const [state, setState] = useState(initialStateValue);
    
    useEffect(() => {
        return () => {
            isComponentMounted.current = false;
        }
    }, []);

    const setSafeState = useCallback((newValue: StateType) => {
        if (isComponentMounted.current === true) {
            setState(newValue);
        }
    }, []);

    return [
        state,
        setSafeState
    ];
};

export default useSafeState;