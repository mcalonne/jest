import { Table } from 'react-bootstrap';
import { GuessedWord, GuessedWordsProps } from '../types/Guessed.app';
import { DATA_TEST_ELEMENTS } from '../shared/Testing.constants';
import { GUESS_INSTRUCTIONS_MSG } from '../shared/Congrats.constants';
import PropTypes from 'prop-types';

const generateTableRows = (guessedWords: Array<GuessedWord>) => {
    return guessedWords.map((guessedWord, idx) => 
        <tr data-test={DATA_TEST_ELEMENTS.GUESSED_WORD} key={idx}>
            <td>{guessedWord.word}</td>
            <td>{guessedWord.lettersMatchedCount}</td>
        </tr>
    );
}

const GuessedWords: React.FC<{ guessedWords: GuessedWord[] }> = ({ guessedWords = [] }) => {
    const content = (
        guessedWords.length === 0 ? 
            <span data-test={DATA_TEST_ELEMENTS.GUESSED_INSTRUCTIONS}>{GUESS_INSTRUCTIONS_MSG}</span> 
            : (<div data-test={DATA_TEST_ELEMENTS.GUESSED_WORDS}>
                <h3>Guessed words</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Word</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { generateTableRows(guessedWords) }
                    </tbody>
                </Table>
            </div>)
    );
    return <div data-test={DATA_TEST_ELEMENTS.GUESSED_WORDS_COMPONENT}>{content}</div>
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(PropTypes.shape({
        word: PropTypes.string.isRequired,
        lettersMatchedCount: PropTypes.number.isRequired
    }).isRequired).isRequired
}

export default GuessedWords;