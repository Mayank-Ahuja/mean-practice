var mongoose = require("mongoose");
var dbconfig = require("./dbconfig");

mongoose.connect(dbconfig.dburl);
module.exports = mongoose;