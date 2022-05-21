import FacultyNavigation from "../FacultyRoutes/FacultyNavigation";
import FacultyDashboard from "../FacultyRoutes/FacultyDashboard";
import CdfandSyllabus from "../CdfandSyllabus";
import CourseFolder from "../CourseFolder";
import CourseDescription from "../CreateCDF";
import FacultyMeeting from "../FacultyMeeting";
import {Route,Routes} from "react-router-dom";
import CACDashboard from "../CACMember/CACDashboard"
import CACnav from "../CACMember/CACnav"
function CACRoutes() {
    return (
        <Routes>
        <Route path="/" element={<CACnav />}>
        <Route
          path="/Dashboard"
          element={<CACDashboard />}
        />{/*
        <Route path="/CdfandSyllabus">
          <Route path=":id" element={<CourseDescription />} />
          <Route index element={<CdfandSyllabus />} />
        </Route>
        <Route path="/FacultyMeeting">
          <Route path=":id" element={<FacultyMeeting />} />
          <Route index element={<FacultyMeeting />} />
        </Route>
        */}
        </Route>
        </Routes>
             );
}

export default CACRoutes;
