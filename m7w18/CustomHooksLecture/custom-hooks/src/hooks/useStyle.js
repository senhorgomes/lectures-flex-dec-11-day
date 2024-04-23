import { useEffect, useState } from "react";

const useStyle = () => {
    const [coords, setCoords] = useState({x:0, y:0})
    const handleMouseMovement = (event) => {
        setCoords({x: event.x, y: event.y})
    }
    useEffect(()=> {

        // document.addEventListener('mousemove', (event)=>handleMouseMovement(event));
        document.addEventListener('mousemove', handleMouseMovement);
        return () => {
            document.removeEventListener('mousemove', handleMouseMovement)
        }

    }, [])

    return coords;
}

export default useStyle;