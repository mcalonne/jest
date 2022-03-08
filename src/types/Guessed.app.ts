import { ReactWrapper, ShallowWrapper } from "enzyme";

// for component Congrats
export type CongratsProps = {
    success: boolean;
    successMessage?: string;
};

// for component GuessedWords
export type GuessedWord = {
    word: string;
    lettersMatchedCount: number;
}

export type GuessedWordsProps = {
    guessedWords: Array<GuessedWord>;
};

// for testing purposes (enzyme)
export type WrapperType = ShallowWrapper | ReactWrapper;

