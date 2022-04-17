var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var AuthRouter = require("./Routes/AuthRoutes/Auth");
var CourseRouter = require("./Routes/AdminRoutes/Courses");
var FacultyRouter = require("./Routes/AdminRoutes/Faculty");
var MeetingRouter = require("./Routes/MeetingRoute/MeetingRoute");
var CategoryRouter = require("./Routes/AdminRoutes/Category")
var { getUser } = require("./Middleware/User");

var app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/Auth", AuthRouter);
app.use("/Course", getUser, CourseRouter);
app.use("/Faculty", getUser, FacultyRouter);
app.use("/Meeting", getUser, MeetingRouter);
app.use("/Category", getUser, CategoryRouter);

const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CAC");
    app.listen(process.env.PORT || 4000, () =>
      console.log("Listening on port 4000")
    );
  } catch (error) {
    console.log(error);
  }
};

start();
