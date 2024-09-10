import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
