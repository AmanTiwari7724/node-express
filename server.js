const express = require("express");
const connect = require("./config/db");
const user = require("./controllers/user");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", user);

app.listen(3000, async () => {
  try {
    await connect();
    console.log("Example app listening on port 3000!");
  } catch (err) {
    console.log(err);
  }
});
