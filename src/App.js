import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import HealthCheckupPage from './pages/HealthCheckupPage';
import ResultSheetPage from './pages/ResultSheetPage';
import PatientListPage from './pages/PatientListPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetailPage />} />
        <Route path="/patients" element={<PatientListPage />} />
        <Route path="/stimulation" element={<DetailPage />} />
        <Route path="/checkup/*" element={<HealthCheckupPage />} />
        <Route path="/result/:patientId/:option" element={<ResultPage />} />
        <Route path="/result/:patientId" element={<ResultSheetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
