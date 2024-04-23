import { useState } from "react";

const useCounter = (defaultValue) => {
    const [count, setCount] = useState(defaultValue || 0);

    const increaseCount = () => {
        setCount(prev => prev + 1)
    }
    
    return {count, increaseCount};
}

export default useCounter;