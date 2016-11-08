loginApp.controller("loginCtrl", function ($scope, loginFactory) {
    $scope.doLogin = function () {
        var userObject = {
            "userid": $scope.userid,

        };
        var promise = loginFactory.loginUser(userObject);
        promise.then(function (data) {
            $scope.credentials = data.data.userData;
            var userCredentials = data.data.userData;
            if (userCredentials.length > 0) {
                alert("welcome User");
                console.log("SUCCESS ", data.data.msg);


                console.log("user credentials are: ", userCredentials[0]["_id"]);
                console.log("SUCCESS ", data.data.userData);
            } else {
                alert("Invalid User");
            }
            // window.alert(data.data.msg);
        }, function (error) {
            console.log(error);
        });
    }
});