import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Congrats from "../components/Congrats";
import GuessedWords from "../components/GuessedWords";
import Input from "../components/Input";
import { useAppSelector, setSecretWord } from '../actions';
import { DATA_TEST_ELEMENTS } from '../shared/Testing.constants';

import 'bootstrap/dist/css/bootstrap.css';

const GuessWordApp: React.FC = () => {
    const isWordGuessed = useAppSelector(state => state.appStatus.isWordGuessed);
    const guessedWords = useAppSelector(state => state.appContent.guessedWords);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSecretWord('party')); // FIXME: for test purpose, use API
    }, [dispatch]);

    return (
        <Container data-test={DATA_TEST_ELEMENTS.APP_COMPONENT}>
            <h1>Guess the secret word</h1>
            <Congrats success={isWordGuessed} />
            <Input />
            <GuessedWords guessedWords={guessedWords} />
        </Container>
    )
};

export default GuessWordApp;