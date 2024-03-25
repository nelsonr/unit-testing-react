import { useState, MouseEvent } from 'react';
import Example01 from './examples/Example01';

import './App.css';

function App() {
  const [example, setExample] = useState(0);

  const navigateTo = (ev: MouseEvent, exampleIndex: number) => {
    ev.preventDefault();
    setExample(exampleIndex);
  };

  const renderExample = () => {
    const ExampleComponent = [Example01][example];

    if (ExampleComponent) {
      return <ExampleComponent />;
    }

    return null;
  };

  return (
    <>
      <main>{renderExample()}</main>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={(ev) => navigateTo(ev, 0)}>
              Example 01
            </a>
          </li>
          <li>
            <a href="#" onClick={(ev) => navigateTo(ev, 1)}>
              Example 02
            </a>
          </li>
          <li>
            <a href="#" onClick={(ev) => navigateTo(ev, 2)}>
              Example 03
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
