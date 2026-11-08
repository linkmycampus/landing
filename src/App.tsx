import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketingLayout from './layouts/MarketingLayout';
import HomePage from './pages/HomePage';
import { SECTIONS } from './config/sections';
import WaitlistPage from './pages/WaitlistPage';
import { AmbassadorRoute, PartnersHub, ProgramRoute } from './pages/PartnerPage';
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
          {/* Clean section addresses: /story, /features, /campus, /creators, /faq */}
          {Object.keys(SECTIONS).map((path) => (
            <Route key={path} path={path} element={<HomePage />} />
          ))}
          <Route path="waitlist" element={<WaitlistPage />} />
          <Route path="ambassador" element={<AmbassadorRoute />} />
          <Route path="partners" element={<PartnersHub />} />
          <Route path="partners/:slug" element={<ProgramRoute />} />
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
