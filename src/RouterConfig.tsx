import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnotherPage from './pages/anotherPage/AnotherPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import TopPage from './pages/topPage/TopPage';
import Snackbar from './shared/components/snackbar/Snackbar';

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TopPage />} />
        <Route path="another" element={<AnotherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Snackbar />
    </BrowserRouter>
  );
}
