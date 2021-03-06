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
const hospitalRouter = require("./routes/hospital")
const medicationRouter = require("./routes/medication");
const diseasesRouter = require("./routes/diseases");


const PORT = 5002;
var app = express();


app.engine("handlebars", exphbs({
    partialsDir: path.join(__dirname + "/views/partials")
}));
app.set("view engine", "handlebars");

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//declare static
app.use(express.static(__dirname + "/assets"));



app.use("/", mainRouter)
app.use("/hospitals", hospitalRouter)
app.use("/api/patient", patientAPIRouter);
app.use("/patients", patientRouter);
app.use("/medications", medicationRouter);
app.use("/diseases", diseasesRouter);



app.listen(PORT, ()=>{
    console.log(`listening on http://127.0.0.1:${PORT}`)
})



