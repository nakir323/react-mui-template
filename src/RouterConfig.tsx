import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnotherPage from './pages/anotherPage/AnotherPage';
import TopPage from './pages/topPage/TopPage';

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="another" element={<AnotherPage />} />
      </Routes>
    </BrowserRouter>
  );
}
