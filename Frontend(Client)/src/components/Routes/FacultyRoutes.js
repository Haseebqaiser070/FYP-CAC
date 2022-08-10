import FacultyNavigation from "../Faculty/FacultyNavigation";
import FacultyDashboard from "../Faculty/FacultyDashboard";

import { Route, Routes } from "react-router-dom";

import Sos from "../PdfTemplates/Sos";
import CourseFolder from "../Faculty/CourseFolder";

function FacultyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FacultyNavigation />}>
        <Route path="/Dashboard" element={<FacultyDashboard />} />
        <Route path="/Sos" element={<Sos />} />

        <Route path="/CourseFolder">
          <Route path=":id" element={<CourseFolder />} />
          <Route index element={<CourseFolder />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default FacultyRoutes;
