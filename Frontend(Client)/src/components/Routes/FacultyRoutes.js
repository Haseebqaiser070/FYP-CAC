import FacultyNavigation from "../Faculty/FacultyNavigation";
import FacultyDashboard from "../Faculty/FacultyDashboard";

import { Route, Routes } from "react-router-dom";

import Sos from "../PdfTemplates/Sos";
import CourseFolder from "../Faculty/CourseFolder";
import AllAssignedCourses from "../Faculty/AllAssignedCourses";

function FacultyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FacultyNavigation />}>
        <Route path="/Dashboard" element={<FacultyDashboard />} />
        <Route path="/Sos" element={<Sos />} />
        <Route path="/CourseFolder/:id" element={<CourseFolder />} />
        <Route path="/AllCoursesAssigned">
          <Route path=":id" element={<AllAssignedCourses />} />
          <Route index element={<AllAssignedCourses />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default FacultyRoutes;
