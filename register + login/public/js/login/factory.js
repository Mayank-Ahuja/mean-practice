loginApp.factory("loginFactory", function ($http, $q) {
    var object = {
        loginUser: function (userObject) {
            var defer = $q.defer();
            $http.post('http://localhost:1234/login', userObject).then(function (data) {
                defer.resolve = data;
            }, function (error) {
                defer.reject = error;
            })
            return defer.promise;
        }
    }
    return object;
});