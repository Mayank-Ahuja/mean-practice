var mongo = require("./schemadefine");

var dbOperations = {

    addUser: function (data, response) {
        var User = require("./schemadefine");
        User.create(data, function (error, result) {
            if (error) {
                response.json({
                    "msg": "Can't Add Error Occured "
                });
            } else {
                response.json({
                    msg: "Register SuccessFully..."
                });
            }
        });
    },
    findUser: function (data, response) {
        var cursor = db.collection('userdatas').find();
        cursor.forEach(function (doc, err) {
            console.log(doc);
        });
    }
}
module.exports = dbOperations;