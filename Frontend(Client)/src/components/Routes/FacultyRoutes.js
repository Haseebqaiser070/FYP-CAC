import FacultyNavigation from "../Faculty/FacultyNavigation";
import FacultyDashboard from "../Faculty/FacultyDashboard";

import FacultyMeeting from "../FacultyMeeting";
import { Route, Routes } from "react-router-dom";
function FacultyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FacultyNavigation />}>
        <Route path="/Dashboard" element={<FacultyDashboard />} />
        <Route path="/FacultyMeeting">
          <Route path=":id" element={<FacultyMeeting />} />
          <Route index element={<FacultyMeeting />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default FacultyRoutes;
