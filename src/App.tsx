import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingLayout from './layouts/MarketingLayout';
import HomePage from './pages/HomePage';
import WaitlistPage from './pages/WaitlistPage';
import AmbassadorPage from './pages/AmbassadorPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CommunityStandardsPage from './pages/CommunityStandardsPage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import DeleteDataPage from './pages/DeleteDataPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route index element={<HomePage />} />
          <Route path="waitlist" element={<WaitlistPage />} />
          <Route path="ambassador" element={<AmbassadorPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="community-standards" element={<CommunityStandardsPage />} />
          <Route path="delete-account" element={<DeleteAccountPage />} />
          <Route path="delete-data" element={<DeleteDataPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
