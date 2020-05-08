const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const patientManager = require("./models/Patient")
const diseaseManager = require("./models/Diseases")
const hospitalManager = require("./models/Hospital");
const medicationManager = require("./models/Medication");
const patientRouter = require("./routes/patient");
const patientAPIRouter = require("./routes/patientAPI")
const mainRouter = require("./routes/main");
const hospitalRouter = require("./routes/hospital");

const PORT = 5002;
var app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routing middleware

app.use("/", mainRouter)
app.use("/api/patient", patientAPIRouter);
app.use("/patient", patientRouter);
app.use("/hospital", hospitalRouter);

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// var hbs = exhbs.create({/**
//     configuration 
//  */
// defaultLayout:"main",

// });




app.listen(PORT, ()=>{
    console.log(`listening on http://127.0.0.1:${PORT}`)
})



