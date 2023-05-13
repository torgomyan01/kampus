import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { SITE_URL } from "./utils/const";
import AnalyticUsers from "./pages/analytic_users/analytic-users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={SITE_URL.HOME} element={<Login />} />
        <Route path={SITE_URL.DASHBOARD} element={<Dashboard />} />
        <Route path={SITE_URL.ANALYTIC_USERS} element={<AnalyticUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
