// const express =require("express");
const express = require('express');
const router = express.Router();

const { getuser } = require('../controller/usercontroller');
// const router=express.router();
router.get('/list',getuser);

module.exports=router;