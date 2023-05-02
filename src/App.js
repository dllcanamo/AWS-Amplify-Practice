import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  SurveillancePage,
  ReportsPage,
  UserConfigPage,
  ProducerPage,
} from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/surveillance" element={<SurveillancePage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/user-config" element={<UserConfigPage />} />
      <Route path="/producer" element={<ProducerPage />} />
    </Routes>
  );
}

export default App;
