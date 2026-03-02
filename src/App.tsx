/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Placeholder components for other pages
const PlaceholderPage = ({ title }: { title?: string }) => {
  const params = useParams();
  const displayTitle = title || (params.page ? params.page.replace(/-/g, ' ') : (params.category || 'Page'));
  
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 capitalize">{displayTitle}</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<PlaceholderPage title="Features" />} />
            <Route path="/solutions" element={<PlaceholderPage title="Solutions" />} />
            <Route path="/enterprise" element={<PlaceholderPage title="Enterprise" />} />
            <Route path="/resources" element={<PlaceholderPage title="Resources" />} />
            <Route path="/pricing" element={<PlaceholderPage title="Pricing" />} />
            <Route path="/signin" element={<PlaceholderPage title="Sign In" />} />
            <Route path="/demo" element={<PlaceholderPage title="Request a Demo" />} />
            <Route path="/signup" element={<PlaceholderPage title="Get Started" />} />
            <Route path="/:category/:page" element={<PlaceholderPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
