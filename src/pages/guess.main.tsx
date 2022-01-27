import Congrats from "../components/Congrats";
import GuessedWords from "../components/GuessedWords";
import { GuessedWord } from '../types/Guessed.app';

const MainApp: React.FC = () => {
    const guessedWords: Array<GuessedWord> = [
        { word: "train", lettersMatchedCount: 3 }, 
        { word: "xbox", lettersMatchedCount: 0}
    ];
    return (
        <>
            <Congrats success={true} />
            <GuessedWords guessedWords={guessedWords} />
        </>
    )
};

export default MainApp;