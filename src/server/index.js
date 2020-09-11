var path = require("path");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const meaningcloudAPI = process.env.API_KEY;
const meaningcloudURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const fetch = require("node-fetch");

// console.log(`Your API key is ${process.env.API_KEY}`);

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8094, function () {
  console.log("Example app listening on port 8094!");
});

app.get("/all", function (req, res) {
  res.send(projectData);
});
const projectData = [];
let data = {};
app.post("/article", function (req, res) {
  var EnteredUrl = req.body.text;

  // console.log(req.body.text)
  var out = encodeURI(EnteredUrl);
  AnalyseURL(out).then(function (result) {
    data.polarity = result.score_tag;
    data.agreement = result.agreement;
    data.subjectivity = result.subjectivity;
    data.confidence = result.confidence;
    data.irony = result.irony;
    projectData.push(data);
    res.send(projectData);
    // console.log(projectData);
  });
});

const AnalyseURL = async (requestUrl) => {
  const response = await fetch(
    meaningcloudURL +
      meaningcloudAPI +
      "&of=json&url=" +
      requestUrl +
      "&lang=en"
  );
  console.log(response);

  try {
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};
