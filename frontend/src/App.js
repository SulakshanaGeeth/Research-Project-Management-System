import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Login Register Reset Imports Goes Here

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ResetPassword from "./components/Register/ResetPassword";
import StaffRegister from "./components/Register/StaffRegister";
import PageNotFound from "./routes/PageNotFound";
import PrivateRoute from "./routes/PrivateRoute";

//Supervisor Imports
import SupervisorDashboard from "./components/Staff/Supervisor/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/passwordreset/:resetToken"
            element={<ResetPassword />}
          />
          <Route path="*" element={<PageNotFound />} />

          {/* Private Routes Goes Here */}

          <Route
            path="/staff-register"
            element={
              <PrivateRoute>
                <StaffRegister />
              </PrivateRoute>
            }
          />

          {/* Supervisor Routes Goes Here */}
          <Route
            path="/:supervisorType/:username"
            element={
              <PrivateRoute>
                <SupervisorDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
