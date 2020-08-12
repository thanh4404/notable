const express = require('express');
const app = express();
const DoctorController = require('./controller/DoctorController');
app.use('/', DoctorController);
module.exports = app;