import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Login Register Reset Imports Goes Here

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ResetPassword from "./components/Register/ResetPassword";
import StaffRegister from "./components/Register/StaffRegister";
import PageNotFound from "./routes/PageNotFound";
import PrivateRoute from "./routes/PrivateRoute";

//Supervisor Imports
import SupervisorDashboard from "./components/Staff/Supervisor/Dashboard";

//Admin Imports
import ViewUsers from "./components/Staff/Admin/AdminDashboardSubComponents/ViewUsers";

const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
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
            path="/v1/:supervisorType/:username"
            element={
              <PrivateRoute>
                <SupervisorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/v1/:supervisorType/:username/research-topics"
            element={
              <PrivateRoute>
                <SupervisorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/v1/:supervisorType/:username/evaluate-documents"
            element={
              <PrivateRoute>
                <SupervisorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/v1/:supervisorType/:username/chat"
            element={
              <PrivateRoute>
                <SupervisorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-dashboard/:username/view"
            element={
              <PrivateRoute>
                <ViewUsers />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <>
        {/* React Fragment */}
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </button>
        )}
        {/* &#8679; is used to create the upward arrow */}
      </>
    </>
  );
};

export default App;
