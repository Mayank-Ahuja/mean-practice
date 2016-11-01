loginApp.controller("loginCtrl", function ($scope, loginFactory) {
    $scope.doLogin = function () {
        var userObject = {
            "userid": $scope.userid,

        };
        var promise = loginFactory.loginUser(userObject);
        promise.then(function (data) {
            console.log("SUCCESS ", data.data.msg);
            // window.alert(data.data.msg);
        }, function (error) {
            console.log(error);
        });
    }

});