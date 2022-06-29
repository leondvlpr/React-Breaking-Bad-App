import React, { useState } from 'react'

export const useCounter = (initialValue) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter + 1)
    }
    
    return {
        increment,
        counter
    };
}
