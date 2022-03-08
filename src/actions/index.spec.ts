import moxios from 'moxios';
import { getSecretWord } from '.';

describe('getSecretWord', () => {
    const mockSecretWord = 'party';

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('secret word is returned', async () => {
        // eslint-disable-next-line testing-library/await-async-utils
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: mockSecretWord
            });
        });

        const secretWord = await getSecretWord();
        expect(secretWord).toBe(mockSecretWord);
    });
});