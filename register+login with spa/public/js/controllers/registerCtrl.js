app.controller("registerCtrl", function ($scope, regFactory) {
    $scope.register = function () {
        if ($scope.pwd === $scope.cpwd) {
            var password = $scope.pwd;
        }
        var userObject = {
            "userName": $scope.userName,
            "Contact": $scope.contact,
            "email": $scope.eMail,
            "password": password
        }
        var promise = regFactory.registerUser(userObject);
        promise.then(function (data) {
            alert(data.data.msg);
            $scope.userName = "";
            $scope.contact = "";
            $scope.eMail = "";
            $scope.pwd = "";
            $scope.cpwd = "";
        }, function (error) {
            alert(error);
        });
    }

    $scope.doEmailCheck = function () {
        var emailObject = {
            "email": $scope.eMail
        }
        console.log("email id is..  ", $scope.eMail)
        var promise = regFactory.checkEmail(emailObject);
        promise.then(function (data) {
            var emails = data.data.details;
            if (emails.length > 0) {
                $scope.mail = "email id  already in use...";
            } else {
                $scope.mail = "";
            }
        }, function (error) {
            alert(error);
        });
    }
    $scope.doContactCheck = function () {
        var contactObject = {
            "Contact": $scope.contact
        }
        console.log("contact no is..  ", $scope.contact)
        var promise = regFactory.checkContact(contactObject);
        promise.then(function (data) {
            var contacts = data.data.details;
            console.log(contacts);
            if (contacts.length > 0) {
                $scope.number = "contact no already in use...";
            } else {
                $scope.number = "";
            }
        }, function (error) {
            alert(error);
        });
    }
});