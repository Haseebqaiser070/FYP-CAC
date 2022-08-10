import FacultyMeeting from "../FacultyMeeting";
import { Route, Routes } from "react-router-dom";
import CACDashboard from "../CACMember/CACDashboard";
import CACnav from "../CACMember/CACnav";
import CacCourseTask from "../CacCourseTask";
import CacAllTasks from "../CacAllTasks";
import CacCdfTask from "../CACMember/CacCdfTask";
import AddNewCourseDocument from "../CoursesCreations/AddNewCourseDocument";
import Course from "../CoursesCreations/Course";
import CacAvailability from "../CacAvailability";
import CacInitializedTasks from "../CacInitializedTasks";
import CacSyllabus from "../CACMember/CACSyllabus";
import CacSosTask from "../CACMember/CacSosTask";
import Cdf from "../PdfTemplates/Cdf";
import CreateSOS from "../SOSCreation/CreateSOS";
import SOS from "../SOSCreation/SOS"
import CDF from "../CDFCreations/CDF"
import CreateCDF from "../CDFCreations/CreateCDF"

function CACRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CACnav />}>
        <Route path="/Dashboard" element={<CACDashboard />} />
        <Route path="/CacCourseTask" Route index element={<CacCourseTask />} />
        <Route path="/CourseCreation/:Code" element={<Course />} />
        <Route path="/AddnewCourse/:Code" element={<AddNewCourseDocument />} />
        <Route path="/SOSCreation/:Program" element={<SOS />} />
        <Route path="/CreateSOS/:Program" element={<CreateSOS />} />  
        <Route path="/CacSosTask" Route index element={<CacSosTask />} />
        <Route path="/CacCdfTask" element={<CacCdfTask />} />
        <Route path="/CDFCreation/:Code" element={<CDF />} />
        <Route path="/CreateCDF/:Code" element={<CreateCDF />} />
        <Route path="/CacSyllabusTask" Route index element={<CacSyllabus />} />


        <Route path="/CacAllTasks">
          <Route path=":id" element={<CacAllTasks />} />
          <Route index element={<CacAllTasks />} />
        </Route>
        <Route path="/CacInitializedTasks">
          <Route path=":id" element={<CacInitializedTasks />} />
          <Route index element={<CacInitializedTasks />} />
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
