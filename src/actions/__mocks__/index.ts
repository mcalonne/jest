module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    useAppSelector: jest.fn(),
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')), // TODO: redux action instead
};

export {}