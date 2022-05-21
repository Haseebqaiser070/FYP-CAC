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
import OngoingTasks from "../OngoingTasks";
import Meeting from "../Meeting";
import AddNewCourse from "../AddNewCourse";
import CourseFolder from "../CourseFolder";
import {  Route } from "react-router-dom";

function AdminRoutes() {
  conosle.log("ADrio")
    return (

            <Route path="/admin/" element={<Navigation />}>
                <Route path="/admin/Dashboard" element={<Dashboard />} />
                <Route path="/admin/Register" element={<Register />} />
                <Route
                  path="/admin/AllCategories"
                  element={<AllCategories />}
                />
                <Route path="/admin/AddNewCourse" element={<AddNewCourse />} />
                <Route path="/admin/AddCourse" element={<AddCourse />} />

                <Route
                  path="/admin/EditCourse/:id"
                  element={<EditCourseForm />}
                />
                <Route path="/admin/Meeting" element={<Meeting />} />
                <Route
                  path="/admin/AllSchemeofStudies"
                  element={<AllSchemeofStudies />}
                />
                <Route path="/admin/Sos" element={<Sos />} />

                <Route path="/admin/SosCreation" element={<SosCreation />} />
                {/*<Route path="/admin/CdfandSyllabus">
                  <Route path=":id" element={<CourseDescription />} />
                  <Route index element={<CdfandSyllabus />} />
                </Route>
    */}<Route path="/admin/Users" element={<Users />} />
                <Route path="/admin/CourseFolder/" element={<CourseFolder />} />
                <Route path="/admin/Tasks/" element={<Tasks />} />
                <Route path="/admin/OngoingTasks/" element={<OngoingTasks />} />
            </Route>
             );
}

export default AdminRoutes;
