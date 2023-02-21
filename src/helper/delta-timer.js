
import { useRef, useEffect } from 'react';

/*
    Custom useInterval hook for delta time
    Tracks delta time index for changing background/components
    Save's the initial time stamp for time ellapsed computation.
*/
export const useInterval = (callback, delay) => {
    const callbackRef = useRef();

    useEffect(()=>{
        callbackRef.current = callback;
    }, [callback]);

    useEffect(()=>{
        const tick = () => {
            callbackRef.current();
        }
        if(delay) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}




