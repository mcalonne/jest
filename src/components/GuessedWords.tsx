import { GuessedWordsProps } from '../types/Guessed.app';
import { COMPONENT_DATA_TEST_ATT, 
        GUESSED_INSTRUCTION_DATA_TEST_ATT, 
        GUESSED_WORDS_DATA_TEST_ATT,
        GUESSED_WORD_DATA_TEST_ATT,
        GUESS_INSTRUCTIONS_MSG 
} from '../shared/GuessedWorlds.constants';

const GuessedWords: React.FC<GuessedWordsProps> = ({ guessedWords }) => {
    const content = (
        guessedWords.length === 0 ? 
            <span data-test={GUESSED_INSTRUCTION_DATA_TEST_ATT}>{GUESS_INSTRUCTIONS_MSG}</span> 
            : (<div data-test={GUESSED_WORDS_DATA_TEST_ATT}>
                <h3>Guessed words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Word</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWords.map((guessedWord, idx) => <tr data-test={GUESSED_WORD_DATA_TEST_ATT} key={idx}><td>{guessedWord.word}</td><td>{guessedWord.lettersMatchedCount}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>)
    );
    return <div data-test={COMPONENT_DATA_TEST_ATT}>{content}</div>
};

export default GuessedWords;