import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button onClick={()=>setCount(prev => prev+1)}>increment</button>
        </div>
    );
};