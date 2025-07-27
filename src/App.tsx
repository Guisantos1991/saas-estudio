import { Routes, Route } from "react-router-dom";
import SetClient from "./pages/SetClient";
import Sales from "./pages/Sales";
import Calendar from "./pages/CalendarClient";
import Overview from "./pages/Overview"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SetClient />} />
      <Route path="/cadastro" element={<SetClient />} />
      <Route path="/vendas" element={<Sales />} />
      <Route path="/agenda" element={<Calendar />} />
      <Route path="/admin" element={<Overview />} />
    </Routes>
  );
}