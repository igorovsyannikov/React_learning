import { useState } from 'react';

export function useCount(openItem) {
    console.log(openItem);
    const [count,setCount] = useState(1);

    const onChange = e => setCount(e.target.value);

    return {count, setCount, onChange}
}