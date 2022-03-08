/**
 * Counts the number of common letters between 2 given words.
 * @param guessWord 
 * @param secretWord 
 * @returns number the number of common letters
 */
export const getLetterMatchCount = (guessWord: string, secretWord: string) => {
    let lettersCount = 0;
    const secretWordArr = Array.from(secretWord);
    [...guessWord].forEach(currentLetter => {
        if(secretWord.length > 0 && secretWordArr.includes(currentLetter)){
            lettersCount++;
            secretWordArr.splice(secretWordArr.indexOf(currentLetter), 1);
        }
    });
    return lettersCount;
};