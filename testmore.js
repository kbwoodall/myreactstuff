const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! again from vscode.dev and local vscode and HP");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
