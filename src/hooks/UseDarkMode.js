import React, {useEffect} from 'react';
import {useLocalStorage} from './UseLocalStorage'

export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage('storedValue')

    useEffect(() => {
        const bodyClass = document.getElementsByTagName("BODY")[0]
        if(storedValue) {
            bodyClass.classList.add("dark-mode")
            console.log(bodyClass)
        } else {
            bodyClass.classList.remove("dark-mode")
        }
    }, [storedValue])

    return [storedValue, setValue]
}

