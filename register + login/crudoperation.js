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
        /*var cursor = db.collection('userdatas').find();
cursor.forEach(function (doc, err) {
    console.log(doc);*/
        var User = require("./schemadefine");
        User.find(data, function (error, docs) {
            if (error) {
                /*console.log("Record not found", error);*/
                response.json({
                    msg: "can not find user"
                });
            } else {
                console.log(docs);
                response.json({
                    userData: docs,
                    msg: "user found"
                });
            }
        });
        /*var cursor = User.find({
            "userid": "data"
        });
        cursor.forEach(function (doc, error) {
            if (error) {
                console.log("Record not found", error);
            } else {
                console.log(docs);
            }
        });*/
    }
}
module.exports = dbOperations;