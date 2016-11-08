var mongoose = require("./connection");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userid: String,
    password: String,
    phone: String,
    address: String,
}, {
    collection: 'userdatas'
});

var User = mongoose.model("userdatas", userSchema);

var Find = mongoose.model("userdatas", userSchema);

module.exports = User;

module.exports = Find;