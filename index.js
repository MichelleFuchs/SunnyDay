const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routing API
const weather = require("./api/weather");
app.use("/", weather);

if (app.get("env") === "production") {
  //set static folder for react
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 4545;

app.listen(port, () => console.log(`Server listening on port ${port}`));
