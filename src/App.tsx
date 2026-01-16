import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { RedpandaDemo } from './pages/RedpandaDemo';
import { HospitalDemo } from './pages/HospitalDemo';
import { StationaryAppDemo } from './pages/StationaryAppDemo';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/redpanda" element={<RedpandaDemo />} />
          <Route path="/projects/hospital-management" element={<HospitalDemo />} />
          <Route path="/projects/stationary-app" element={<StationaryAppDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}