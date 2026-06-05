import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingLayout from './layouts/MarketingLayout';
import HomePage from './pages/HomePage';
import WaitlistPage from './pages/WaitlistPage';
import AmbassadorPage from './pages/AmbassadorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<HomePage />} />
          <Route path="waitlist" element={<WaitlistPage />} />
          <Route path="ambassador" element={<AmbassadorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
