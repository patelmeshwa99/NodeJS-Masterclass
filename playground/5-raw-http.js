const { error } = require("console");
const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=API_KEY&query=40,-75";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    console.log(JSON.parse(data));
  });
});

request.on("error", (error) => {
  console.log("An error occured! => " + error);
});

request.end();
