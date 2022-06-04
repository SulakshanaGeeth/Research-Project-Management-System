import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import AdminDashboard from "./components/Staff/Admin/Dashboard";

//Student Imports
import StudentDashboarrd from "./components/Student/Dashboard";
import SubmitPresentation from "./components/Student/SubmitPresentation";

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
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit-presentation" element={<SubmitPresentation />} />
          <Route
            path="/passwordreset/:resetToken"
            element={<ResetPassword />}
          />
          <Route path="*" element={<PageNotFound />} />

          {/* Student Routes Goes Here */}
          <Route
            path="/v3/:student-dashboard/:username"
            element={
              <PrivateRoute>
                <StudentDashboarrd />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/student-dashboard"
            element={<StudentDashboarrd />}
          ></Route> */}
          <Route
            path="/v3/:student-dashboard/:username/student-group"
            element={
              <PrivateRoute>
                <StudentDashboarrd />
              </PrivateRoute>
            }
          />
          {/* <Route path="/student-group" element={<StudentGroup />}></Route> */}
          <Route
            path="/v3/:type/:username/view-document"
            element={
              <PrivateRoute>
                <StudentDashboarrd />
              </PrivateRoute>
            }
          />
          {/* <Route path="/view-document" element={<ViewDocument />}></Route> */}

          <Route
            path="/v3/:type/:username/submit-document"
            element={
              <PrivateRoute>
                <StudentDashboarrd />
              </PrivateRoute>
            }
          />
          {/* <Route path="/submit-document" element={<SubmitDocument />}></Route> */}

          <Route
            path="/v3/:type/:username/request-supervisor"
            element={
              <PrivateRoute>
                <StudentDashboarrd />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/request-supervisor"
            element={<RequestSupervisor />}
          ></Route> */}

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
            path="/v1/:supervisorType/:username/chat/:groupName"
            element={
              <PrivateRoute>
                <SupervisorDashboard />
              </PrivateRoute>
            }
          />

          {/* Admin Routes Goes Here */}
          <Route
            path="/v2/admin-dashboard/:username/view"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/v2/admin-dashboard/:username/edit/:id"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/v2/admin-dashboard/:username"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/v2/admin-dashboard/:username/createmarkingscheme"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/v2/admin-dashboard/:username/documents"
            element={
              <PrivateRoute>
                <AdminDashboard />
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
