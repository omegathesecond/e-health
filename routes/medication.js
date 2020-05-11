const express = require("express");
const formidable = require('formidable');
const path = require("path");
const fs = require("fs");
const { getDatabasepath } = require("../utils/path_manager")
const { EOL } = require("os");



const router = express.Router();


router.get("/", (req, res) => {
  res.render("medications/index")
});

router.post('/add', (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    //gets medication information from form
    var medication_name = fields.medication_name;

    //save to database
    database_file = getDatabasepath("medications");
    fs.appendFile(database_file, medication_name + EOL, function(error){
      if(error) throw error;
    })

    //render medication added view
    res.render("medications/add", {
      new_medication_added: true,
      added_medication: medication_name,

    });
  });
});

router.get("/add", (req, res) => {
  res.render("medications/add", {
    new_medication_added: false
  })
})

module.exports = router;