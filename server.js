console.log("Ctrl + C to close");

const express = require("express");
const app = express();
app.use(express.static("public"))

app.get("/", (request, response) => {
    console.log("Someone visited the main route");
    console.log(request.ip + "visited the main route");
});

app.get("/projects", (request, response) => {
    console.log(request.ip + "visited /projects");
});

app.get("/monopoly", (request, response) => {
    console.log(request.ip + "visited /monopoly");
});

app.get("/chess", (request, response) => {
    console.log(request.ip + "visited /chess");
});

/**
 * Starts a web serer listening on port 3000
 */
app.listen(3000);