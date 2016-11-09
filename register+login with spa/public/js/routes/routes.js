app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "page.html"
    }).when("/login", {
        templateUrl: "login.html"
            /*,
                    controller: "loginCtrl"*/
    }).when("/register", {
        templateUrl: "register.html"
            /*,
            controller: "regCtrl"*/
    }).otherwise({
        template: "Error, No such page found",
        redirectTo: "/"
    });
});