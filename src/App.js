// import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ReportsPage from "./pages/ReportsPage";
import SurveillancePage from "./pages/SurveillancePage";
import UserConfigPage from "./pages/UserConfigPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import awsconfig from "./aws-exports";
import TopNavbar from "./components/TopNavbar";

Amplify.configure(awsconfig);

function App() {
  return (
    <div id="container">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/surveillance" element={<SurveillancePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/user-config" element={<UserConfigPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
