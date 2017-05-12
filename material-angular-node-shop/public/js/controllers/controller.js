app.controller("menuCtrl", function ($scope, menuService) {
    var promise = menuService.object.getMenu();
    console.log("call Starts....");
    promise.then(function (response) {
        $scope.menus = response.data;
    }, function (error) {
        $scope.menus = error;
    })
});
