const path = require("path");
const express = require("express");
const patientManager = require("./models/Patient")
const diseaseManager = require("./models/Diseases")
const hospitalManager = require("./models/Hospital");
const medicationManager = require("./models/Medication");
const patientRouter = require("./routes/patient");
const mainRouter = require("./routes/main");
const hospitalRouter = require("./routes/hospital");

const PORT = 5000;
var app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routing middleware
app.use("/", mainRouter)
app.use("/patient", patientRouter);
app.use("/hospital", hospitalRouter);

app.set("view engine", "handlebars");



app.listen(PORT, ()=>{
    console.log(`listening on http://127.0.0.1:${PORT}`)
})



