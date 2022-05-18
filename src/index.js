const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
const userController = require("./controllers/user.controller");
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userController);


app.listen(port, async function () {
  await connect();

  console.log("listening to port:", port);
});
