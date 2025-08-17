import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SetClient from './pages/SetClient';
import Sales from './pages/Sales';
import Calendar from './pages/CalendarClient';
import Overview from './pages/Overview';
import './styles/App.css';

function App() {
  return (
    <Router basename="/saas-estudio">
      <div className="App">
        <Routes>
          <Route path="/" element={<SetClient />} />
          <Route path="/Sales" element={<Sales />} />
          <Route path="/CalendarClient" element={<Calendar />} />
          <Route path="/Overview" element={<Overview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;