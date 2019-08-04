const express = require("express");
const router = express.Router();
const request = require("request");

const BASE_URI = "https://api.darksky.net/";

router.post("/forecast", function(req, res) {
  request(
    `${BASE_URI}forecast/${process.env.API_SECRET}/${req.body.coords}`,
    function(error, response, body) {
      res.json(body);
    }
  );
});

module.exports = router;
