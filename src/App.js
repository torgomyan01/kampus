import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { SITE_URL } from "./utils/const";
import Programfonds from "./pages/programfonds/programfonds";
import MyRezume from "./pages/myrezume/myrezume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={SITE_URL.HOME} element={<Login />} />
        <Route path={SITE_URL.DASHBOARD} element={<Dashboard />} />
        <Route path={SITE_URL.PROGRAMFONDS} element={<Programfonds />} />
        <Route path={SITE_URL.MYREZUME} element={<MyRezume />} />
      </Routes>
    </Router>
  );
}

export default App;
