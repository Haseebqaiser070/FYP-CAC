import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import CACRoutes from "./components/Routes/CACRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider";
import Home from "./components/Home";
import AdminRoutes from "./components/Routes/AdminRoutes";
import ProtrctedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import PersistLogin from "./components/ProtectedRoutes/PersistLogin";
import CdfandSyllabus from "./components/CdfandSyllabus"
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import AddCourse from "./components/AddCourse";
import Users from "./components/Users";
import AllCategories from "./components/AllCategories";
import EditCourseForm from "./components/EditCourseForm";
import AllSchemeofStudies from "./components/AllSchemeofStudies";
import SosCreation from "./components/SosCreation";
import Sos from "./components/PdfTemplates/Sos";
import CreateTasks from "./components/CreateTasks";
import Tasks from "./components/Tasks";
import OngoingTasks from "./components/OngoingTasks";
import Meeting from "./components/Meeting";
import AddNewCourse from "./components/AddNewCourse";
import CourseFolder from "./components/CourseFolder";


function App() {
  return (
    <React.Fragment>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgotpassword" element={<Forgot />} />            
            <Route element={<PersistLogin />} >
                <Route element={<ProtrctedRoutes allowedRoles={"Admin"}/>}>
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
              {/*  <Route path="/admin/CdfandSyllabus">
                  <Route path=":id" element={<CourseDescription />} />
                  <Route index element={<CdfandSyllabus />} />
                </Route>*/}    
                <Route path="/admin/Users" element={<Users />} />
                <Route path="/admin/CourseFolder/" element={<CourseFolder />} />
                <Route path="/admin/Tasks/" element={<Tasks />} />
                <Route path="/admin/OngoingTasks/" element={<OngoingTasks />} />
            </Route>            </Route>
                <Route path="/CAC/*" element={<ProtrctedRoutes allowedRoles={"CAC"}/>}>
                  <Route element={ <CACRoutes/>}/>
                </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
