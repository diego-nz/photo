import { useState, useEffect, useRef } from 'react';

export const useFetch = (url = '') => {
    
    const isMounted = useRef(true)

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    useEffect(() => {
        setState({
            loading: true,
            error: null,
            data: null
        });
        isMounted.current = true;
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                // To prevent errors, action when component is unmounted
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            });
        // It can be done in another one or in the same useEffect
        return () => {
            isMounted.current = false;
        }
    }, [url]);

    return state
}
