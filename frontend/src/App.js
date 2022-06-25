import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Beasiswa from "./pages/Beasiswa/Beasiswa";
import ProfilPage from "./pages/ProfilPage/ProfilPage";
import AboutPage from "./pages/About/About";
import Pages from "./screens/Pages";
import ProtectedRoute from "./screens/ProtectedRoute";
import Missing from "./pages/Missing/Missing";
import Single from "./pages/Single/Single";
import AuthRoute from "./screens/AuthRoute";
import PrivateRoute from "./screens/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="auth" element={<AuthRoute />}>
        <Route path="login">
          <Route index element={<Login />} />
        </Route>
        <Route path="register">
          <Route index element={<Register />} />
        </Route>
      </Route>
      <Route path="user" element={<PrivateRoute />}>
        <Route path=":id" element={<ProfilPage />} />
      </Route>
      <Route path="scholarship" element={<Pages />}>
        <Route path="kota" element={<Beasiswa />} />
        <Route path="daerah" element={<Beasiswa />} />
        <Route path="nasional" element={<Beasiswa />} />
        <Route path=":id" element={<Single />} />
      </Route>
      <Route path="admin" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default App;
