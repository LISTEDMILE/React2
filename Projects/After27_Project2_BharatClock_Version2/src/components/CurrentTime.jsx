import { useEffect } from "react";
import { useState } from "react";

let CurrentTIme = () => {

    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <p>This is the Current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
};

export default CurrentTIme