import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DATA_TEST_ELEMENTS } from '../shared/Testing.constants';
import { useAppSelector, handleNewGuessTry } from '../actions';
import useSafeState from '../customHooks/useSafeState';

const Input: React.FC = () => {
    const [currentGuess, setCurrentGuess] = useSafeState('');
    const [disableSubmit, setDisableSubmit] = useSafeState(true);
    const isWordGuessed = useAppSelector(state => state.appStatus.isWordGuessed);
    const dispatch = useDispatch();

    useEffect(() => {
        const timerId = setTimeout(() => {
            const newDisabledState = currentGuess.length > 0 ? false : true;
            if (disableSubmit !== newDisabledState) {
                setDisableSubmit(newDisabledState);
            }
        }, 300);
        return () => {
            clearTimeout(timerId);
        };
    }, [currentGuess, disableSubmit, setDisableSubmit]);
    
    const inputOnChangeHandler = (event: React.BaseSyntheticEvent) => {
        setCurrentGuess(event.target.value);
    };

    const submitBtnOnClickHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (currentGuess.length > 0) {
            dispatch(handleNewGuessTry(currentGuess));
            setCurrentGuess('');
        }
    };

    if (isWordGuessed) {
        return <div data-test={DATA_TEST_ELEMENTS.INPUT_COMPONENT} />;
    }

    return <div data-test={DATA_TEST_ELEMENTS.INPUT_COMPONENT}>
            <form className='row g-3'>
                <div className='col-md-8'>
                    <input 
                        data-test={DATA_TEST_ELEMENTS.INPUT_BOX} 
                        className='form-control'
                        type='text'
                        placeholder='Enter your guess ...'
                        value={currentGuess} 
                        onChange={inputOnChangeHandler} />
                </div>
                <div className='col-md-4'>
                    <button data-test={DATA_TEST_ELEMENTS.SUBMIT_BUTTON} 
                            className='btn btn-primary'
                            type='submit'
                            disabled={disableSubmit} 
                            onClick={submitBtnOnClickHandler}>Let's try</button>
                </div>
            </form>
        </div>
}

export default Input;