import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ScanDetail from "@/pages/ScanDetail";
import Projects from "@/pages/Projects";
import Schedule from "@/pages/Schedule";
import Settings from "@/pages/Settings";
import Notifications from "@/pages/Notifications";
import Support from "@/pages/Support";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scans/:id" element={<ScanDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
