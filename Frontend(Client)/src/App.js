import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import AddCourse from "./components/AddCourse";
import Users from "./components/Users";
import CdfandSyllabus from "./components/CdfandSyllabus";
import CourseFolder from "./components/CourseFolder";
import CourseDescription from "./components/CreateCDF";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider";
import ProtectedRouteAdmin from "./components/ProtectedRoutes/ProtectedRouteAdmin";
import ProtectedRouteFaculty from "./components/ProtectedRoutes/ProtectedRouteFaculty";
import FacultyNavigation from "./components/FacultyRoutes/FacultyNavigation";
import FacultyDashboard from "./components/FacultyRoutes/FacultyDashboard";
import AddNewCourse from "./components/AddNewCourse";
import Home from "./components/Home";
import Meeting from "./components/Meeting";
import FacultyMeeting from "./components/FacultyMeeting";
import AllCategories from "./components/AllCategories";

import EditCourseForm from "./components/EditCourseForm";

import AllSchemeofStudies from "./components/AllSchemeofStudies";
import SosCreation from "./components/SosCreation";
import Sos from "./components/PdfTemplates/Sos";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgotpassword" element={<Forgot />} />
            <Route element={<ProtectedRouteAdmin />}>
              <Route path="/admin/" element={<Navigation />}>
                <Route path="/admin/Dashboard" element={<Dashboard />} />
                <Route path="/admin/Register" element={<Register />} />
                <Route
                  path="/admin/AllCategories"
                  element={<AllCategories />}
                />
                <Route path="/admin/AddNewCourse" element={<AddNewCourse />} />
                <Route path="/admin/AddCourse" element={<AddCourse />} />

                <Route
                  path="/admin/EditCourse/:id"
                  element={<EditCourseForm />}
                />
                <Route path="/admin/Meeting" element={<Meeting />} />
                <Route
                  path="/admin/AllSchemeofStudies"
                  element={<AllSchemeofStudies />}
                />
                <Route path="/admin/Sos" element={<Sos />} />

                <Route path="/admin/SosCreation" element={<SosCreation />} />
                <Route path="/admin/CdfandSyllabus">
                  <Route path=":id" element={<CourseDescription />} />
                  <Route index element={<CdfandSyllabus />} />
                </Route>
                <Route path="/admin/Users" element={<Users />} />
                <Route path="/admin/CourseFolder/" element={<CourseFolder />} />
              </Route>
            </Route>
            <Route element={<ProtectedRouteFaculty />}>
              <Route path="/Faculty/" element={<FacultyNavigation />}>
                <Route
                  path="/Faculty/Dashboard"
                  element={<FacultyDashboard />}
                />
                <Route path="/Faculty/CdfandSyllabus">
                  <Route path=":id" element={<CourseDescription />} />
                  <Route index element={<CdfandSyllabus />} />
                </Route>
                <Route path="/Faculty/FacultyMeeting">
                  <Route path=":id" element={<FacultyMeeting />} />
                  <Route index element={<FacultyMeeting />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
