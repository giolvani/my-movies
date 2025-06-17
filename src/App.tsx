import Home from '@/pages/Home';
import Details from '@/pages/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@/lib/styles/global.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
