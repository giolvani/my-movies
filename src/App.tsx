import Home from '@/pages/Home';
import MovieDetails from '@/pages/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@/styles/global.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
