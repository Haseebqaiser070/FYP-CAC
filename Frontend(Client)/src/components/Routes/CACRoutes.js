import FacultyMeeting from "../FacultyMeeting";
import { Route, Routes } from "react-router-dom";
import CACDashboard from "../CACMember/CACDashboard";
import CACnav from "../CACMember/CACnav";
import CacCourseTask from "../CacCourseTask";
import CacAllTasks from "../CacAllTasks";
import CacCdfTask from "../CacCdfTask";
import AddNewCourseDocument from "../CoursesCreations/AddNewCourseDocument";
import Course from "../CoursesCreations/Course";
import CacAvailability from "../CacAvailability";
function CACRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CACnav />}>
        <Route path="/Dashboard" element={<CACDashboard />} />
        <Route path="/CacCourseTask">
          <Route path=":id" element={<CacCourseTask />} />
          <Route index element={<CacCourseTask />} />
        </Route>
        <Route path="/CourseCreation/:Code" element={<Course />} />
        <Route path="/AddnewCourse/:Code" element={<AddNewCourseDocument />} />
        <Route path="/CacAllTasks">
          <Route path=":id" element={<CacAllTasks />} />
          <Route index element={<CacAllTasks />} />
        </Route>
        <Route path="/CacCdfTask">
          <Route path=":id" element={<CacCdfTask />} />
          <Route index element={<CacCdfTask />} />
        </Route>
        <Route path="/FacultyMeeting">
          <Route path=":id" element={<FacultyMeeting />} />
          <Route index element={<FacultyMeeting />} />
        </Route>
        <Route path="/SetAvailability">
          <Route path=":id" element={<CacAvailability />} />
          <Route index element={<CacAvailability />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default CACRoutes;
