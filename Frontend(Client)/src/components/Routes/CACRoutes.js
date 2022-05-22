
import FacultyMeeting from "../FacultyMeeting";
import { Route, Routes } from "react-router-dom";
import CACDashboard from "../CACMember/CACDashboard";
import CACnav from "../CACMember/CACnav";
import CacCourseTask from "../CacCourseTask";
function CACRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CACnav />}>
        <Route path="/Dashboard" element={<CACDashboard />} />
        <Route path="/CacCourseTask">
          <Route path=":id" element={<CacCourseTask />} />
          <Route index element={<CacCourseTask />} />
        </Route>
        <Route path="/FacultyMeeting">
          <Route path=":id" element={<FacultyMeeting />} />
          <Route index element={<FacultyMeeting />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default CACRoutes;
