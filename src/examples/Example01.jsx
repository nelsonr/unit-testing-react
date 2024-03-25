import { useState } from 'react';
import { addOne } from '../utils';

function Example01 () {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <button onClick={() => setCount(addOne(count))}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default Example01;
