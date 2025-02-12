const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postRoute = require("./routers/posts");
const userRoute = require("./routers/user"); // 修正: users -> user
const cors = require("cors");

require("dotenv").config();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute); // 修正: users -> user

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
