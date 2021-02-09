console.log("Ctrl + C to close");

const express = require("express");
const app = express();
const answers = [];

app.use(express.static("public"));
app.use(express.json());

app.get("/", (request, response) => {
    console.log("Someone visited the main route");
    console.log(request.ip + "visited the main route");
});

app.get("/poll.html", (request, response) => {
    console.log("Someone visited poll");
    console.log(request.ip + "visited the poll");
});

app.post("/poll.html", (request, response) => {
    const answer = request.body.answer;
    answers.push(answer);
    console.log("Someone voted " + answer)
    response.send(answers)
});

/**
 * Starts a web serer listening on port 3000
 */
app.listen(3000);