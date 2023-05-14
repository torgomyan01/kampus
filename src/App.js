import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { SITE_URL } from "./utils/const";
import AnalyticUsers from "./pages/analytic_users/analytic-users";
import MyRezume from "./pages/myrezume/myrezume";
import Works from "./pages/works/works";
import RatingUsers from "./pages/ratingusers/ratingusers";
import TableVuz from "./pages/table-vuz/table-vuz";
import Notfound from "./pages/notfound/notfound";

import ProgramFonds from "./pages/programfonds/programfonds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={SITE_URL.HOME} element={<Login />} />
        <Route path={SITE_URL.DASHBOARD} element={<Dashboard />} />
        <Route path={SITE_URL.PROGRAM_FONDS} element={<ProgramFonds />} />
        <Route path={SITE_URL.MY_RESUME} element={<MyRezume />} />
        <Route path={SITE_URL.MY_WORKS} element={<Works />} />
        <Route path={SITE_URL.RATING_USERS} element={<RatingUsers />} />
        <Route path={SITE_URL.NOTFOUND} element={<Notfound />} />
        <Route path={SITE_URL.ANALYTIC_USERS} element={<AnalyticUsers />} />
        <Route path={SITE_URL.LIST_UNIVERSITIES} element={<TableVuz />} />
      </Routes>
    </Router>
  );
}

export default App;
