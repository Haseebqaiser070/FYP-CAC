import FacultyNavigation from "../FacultyRoutes/FacultyNavigation";
import FacultyDashboard from "../FacultyRoutes/FacultyDashboard";
import CdfandSyllabus from "../CdfandSyllabus";
import CourseFolder from "../CourseFolder";
import CourseDescription from "../CreateCDF";
import FacultyMeeting from "../FacultyMeeting";
import {Route,Routes} from "react-router-dom";

function CACRoutes() {
    return (
        <Routes>
        <Route path="/CAC/" element={<FacultyNavigation />}>
        <Route
          path="/CAC/Dashboard"
          element={<FacultyDashboard />}
        />
        <Route path="/CAC/CdfandSyllabus">
          <Route path=":id" element={<CourseDescription />} />
          <Route index element={<CdfandSyllabus />} />
        </Route>
        <Route path="/CAC/FacultyMeeting">
          <Route path=":id" element={<FacultyMeeting />} />
          <Route index element={<FacultyMeeting />} />
        </Route>
        
        </Route>
        </Routes>
             );
}

export default CACRoutes;
