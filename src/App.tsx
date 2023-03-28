import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeIndexPage, AuthIndexPage, DashboardIndexPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeIndexPage />} />
      <Route path="/auth/*" element={<AuthIndexPage />} />
      <Route path="/dashboard/*" element={<DashboardIndexPage />} />
    </Routes>
  );
}

export default App 