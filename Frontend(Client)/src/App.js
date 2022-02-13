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
import Tables from "./components/Tables";
import SchemeofStudies from "./components/SchemeofStudies";
import CourseLearningOutcomes from "./components/CourseLearningOutcomes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/admin/" element={<Navigation />}>
            <Route path="/admin/Dashboard" element={<Dashboard />} />
            <Route path="/admin/Register" element={<Register />} />
            <Route path="/admin/AddCourse" element={<AddCourse />} />
            <Route
              path="/admin/SchemeofStudies"
              element={<SchemeofStudies />}
            />
            <Route
              path="/admin/CourseLearningOutcomes"
              element={<CourseLearningOutcomes />}
            />
            <Route path="/admin/Users" element={<Users />} />
            <Route path="/admin/Tables" element={<Tables />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
