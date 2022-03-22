import { ComponentMeta, ComponentStory } from '@storybook/react';
import GuessedWords from '../components/GuessedWords';
import { GuessedWordsProps } from '../types/Guessed.app';

export default { 
    title : 'GuessedWords',
    component: GuessedWords,
} as ComponentMeta<typeof GuessedWords>;


const Template: ComponentStory<typeof GuessedWords> = (args: GuessedWordsProps) => <GuessedWords {...args} />;

export const SomeGuessed = Template.bind({});
SomeGuessed.storyName = 'Some guessed words';
SomeGuessed.args = {
    guessedWords: [
        { word: 'storybook', lettersMatchedCount: 1 },
        { word: 'train', lettersMatchedCount: 3 },
        { word: 'apple', lettersMatchedCount: 0}]
}

export const NoGuessedWords = Template.bind({});
NoGuessedWords.storyName = 'No guessed words';
NoGuessedWords.args = {
    guessedWords: [],
}
