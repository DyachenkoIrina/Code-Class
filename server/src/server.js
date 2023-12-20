const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const tokensRouter = require("./routes/tokensRouter");
const topicRouter = require("./routes/topicRouter");

const teacherRouter = require("./routes/teacherRouter");
const tasksRouter = require("./routes/tasksRouter");
const apiUsersRouter = require("./routes/apiUserRouter");
const adminRouter = require("./routes/adminRouter");
const groupRouter = require("./routes/groupRouter");
const homeworkRouter = require("./routes/homeWork");
const getnewtaskRouter = require("./routes/getNewTaskRouter");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/v1/topic", topicRouter);
app.use("/api/v1/adminlk", adminRouter);
app.use("/api/v1/teacherlk", teacherRouter);
app.use("/api/v1/task", tasksRouter);
// app.use("/api/v1/newtask", getnewtaskRouter);
app.use("/api/v1/tokens", tokensRouter);
app.use("/api/v1/groupRouter", groupRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/users", apiUsersRouter);
app.use("/api/v1/homework", homeworkRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
