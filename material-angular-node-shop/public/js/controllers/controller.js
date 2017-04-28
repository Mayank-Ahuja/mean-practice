app.controller("menuCtrl", function ($scope, menuService) {
    $scope.loadMenu = function () {
        var promise = menuService.object.getMenu();
        console.log(promise);

        function success(data) {
            $scope.menus = data;
        }

        function error(error) {
            $scope.menus = error;
        }
        promise.then(success, error);
    }
});
