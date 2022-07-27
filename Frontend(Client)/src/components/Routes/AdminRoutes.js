import Navigation from "../Navigation";
import Dashboard from "../Dashboard";
import Register from "../Register";
import AddCourse from "../AddCourse";
import Users from "../Users";
import AllCategories from "../AllCategories";
import EditCourseForm from "../EditCourseForm";
import AllSchemeofStudies from "../AllSchemeofStudies";
import SosCreation from "../SosCreation";
import Sos from "../PdfTemplates/Sos";
import CreateTasks from "../CreateTasks";
import Tasks from "../Tasks";
import ReturnedTasks from "../ReturnedTasks";
import Meeting from "../Meeting";
import AddNewCourse from "../AddNewCourse";
import CourseFolder from "../CourseFolder";
import CourseFinal from "../Admin/CourseFinal";
import { Route, Routes } from "react-router-dom";
import CourseRepo from "../Admin/CourseRepo";
import FacultyMembers from "../FacultyMember";
import DemoBook from "../flipbook";
import CourseFolderDeadlines from "../CourseFolderDeadlines";
import Profile from "../UserProfile";

import CourseReturnedView from "../Admin/CourseReturnedView";
import InitializeTask from "../InitializeTask";
import ViewCacAvailability from "../ViewCacAvailability";
import AddProgram from "../AddProgram";
import Evaluators from "../Evaluators";
import CreateNewMeeting from "../CreateNewMeeting";
import PendingDeadlineRequests from "../PendingDeadlineRequests";
function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/AllCategories" element={<AllCategories />} />
        <Route path="/AddNewCourse" element={<AddNewCourse />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/CourseView/:id" element={<CourseFinal />} />
        <Route
          path="CourseReturnedView/:Code"
          element={<CourseReturnedView />}
        />
        <Route path="/EditCourse/:id" element={<EditCourseForm />} />
        <Route path="/Meeting" element={<Meeting />} />
        <Route path="/CreateNewMeeting" element={<CreateNewMeeting />} />
        <Route
          path="/ViewCacMemberAvailabilty"
          element={<ViewCacAvailability />}
        />
        <Route path="/AllSchemeofStudies" element={<AllSchemeofStudies />} />
        <Route path="/Sos" element={<Sos />} />
        <Route path="/SosCreation" element={<SosCreation />} />
        <Route path="/InitCourse" element={<CourseRepo />} />
        {/*<Route path="/CdfandSyllabus">
                  <Route path=":id" element={<CourseDescription />} />
                  <Route index element={<CdfandSyllabus />} />
                </Route>
              */}
        <Route path="/Users" element={<Users />} />
        <Route path="/FacultyMembers" element={<FacultyMembers />} />
        <Route path="/Evaluators" element={<Evaluators />} />
        <Route path="/CourseFolder" element={<CourseFolder />} />
        <Route path="/AddProgram" element={<AddProgram />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/InitializeTask" element={<InitializeTask />} />
        <Route path="/flip" element={<DemoBook />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/CourseFolderDeadlines"
          element={<CourseFolderDeadlines />}
        />
        <Route
          path="/PendingDeadlineRequests"
          element={<PendingDeadlineRequests />}
        />

        <Route path="/ReturnedTasks" element={<ReturnedTasks />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
