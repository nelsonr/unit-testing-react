import Example01 from './examples/Example01';
import { useState } from 'react';

import './App.css';
import Example02 from './examples/Example02';

function App () {
    const [exampleIndex, setExample] = useState(0);

    const navigateTo = (ev, index) => {
        ev.preventDefault();
        setExample(index);
    };

    const renderExample = () => {
        const ExampleComponent = [ Example01, Example02 ][exampleIndex];

        if (ExampleComponent) {
            return <ExampleComponent />;
        }

        return null;
    };

    return (
        <>
            <main>
                {renderExample()}
            </main>
            
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={(ev) => navigateTo(ev, 0)} className={exampleIndex == 0 ? "active" : ""}>
                            Example 01
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={(ev) => navigateTo(ev, 1)} className={exampleIndex == 1 ? "active" : ""}>
                            Example 02
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default App;
