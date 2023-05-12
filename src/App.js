import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Navbar from "./features/navbar/navbar";
import Login from "./pages/login/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/*<Router>*/}
      {/*  <Routes>*/}
      {/*    <Route exac path="/" element={<Dashboard />} />*/}
      {/*  </Routes>*/}
      {/*</Router>*/}
    </Router>
  );
}

export default App;
