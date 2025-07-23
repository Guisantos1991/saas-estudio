import { Routes, Route } from "react-router-dom";
import SetClient from "./pages/setClient";
import Sales from "./pages/sales";
import Calendar from "./pages/calendarClient";
import Overview from "./pages/overview"
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