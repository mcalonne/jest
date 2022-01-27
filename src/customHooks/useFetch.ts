import { useEffect, useCallback, useRef } from 'react';

const useFetch = () => {
    const abortController = useRef(new AbortController());
    useEffect(() => () => abortController.current.abort());
    return useCallback((endpoint: string, options) => fetch(endpoint, { signal: abortController.current.signal, ...options }), []);
};

export default useFetch;