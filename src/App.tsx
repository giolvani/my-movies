import { useEffect, useState } from 'react';
import { fetchPopular } from './api/tmdb';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchPopular().then(({data, error}) => {
      console.log(data, error);
    });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
