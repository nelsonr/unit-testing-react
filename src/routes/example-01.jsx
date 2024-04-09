import { useState } from 'react';
import { addOne } from '../lib/utils';
import Layout from '../components/layout'

function Example01 () {
    const [count, setCount] = useState(0);

    return (
        <Layout activeMenuItem={0}>
            <div className="card">
                <button onClick={() => setCount(addOne(count))}>
                    count is {count}
                </button>
            </div>
        </Layout>
    );
}

export default Example01;
