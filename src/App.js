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
        <Route path="factrum-frontend/" element={<DetailPage />} />
        <Route path="factrum-frontend/patients" element={<PatientListPage />} />
        <Route path="factrum-frontend/stimulation" element={<DetailPage />} />
        <Route path="factrum-frontend/checkup/*" element={<HealthCheckupPage />} />
        <Route path="factrum-frontend/result/:patientId/:option" element={<ResultPage />} />
        <Route path="factrum-frontend/result/:patientId" element={<ResultSheetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
