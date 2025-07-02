const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hello from the dashboard");
});

app.use("/test", () => {
  res.send("Testing Page.");
});

app.use("run", (req, res) => {
  res.send("Running Page.");
});

app.listen(7777, () => {
  console.log("Server successfully running on port 7777");
});
