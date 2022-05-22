import FacultyNavigation from "../Faculty/FacultyNavigation";
import FacultyDashboard from "../Faculty/FacultyDashboard";

import { Route, Routes } from "react-router-dom";
import CourseFolder from "../CourseFolder";
import AllCoursesCFE from "../AllCoursesCFE";
import AllSchemeofStudiesCFE from "../AllSchemeofStudiesCFE";

function FacultyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FacultyNavigation />}>
        <Route path="/Dashboard" element={<FacultyDashboard />} />

        <Route path="/CourseFolder">
          <Route path=":id" element={<CourseFolder />} />
          <Route index element={<CourseFolder />} />
        </Route>
        <Route path="/AllCourses">
          <Route path=":id" element={<AllCoursesCFE />} />
          <Route index element={<AllCoursesCFE />} />
        </Route>
        <Route path="/AllSchemeofStudies">
          <Route path=":id" element={<AllSchemeofStudiesCFE />} />
          <Route index element={<AllSchemeofStudiesCFE />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default FacultyRoutes;
