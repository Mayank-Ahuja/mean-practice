app.controller("menuCtrl", function ($scope, menuService) {
    var promise = menuService.object.getMenu();
    console.log("call Starts....");
    promise.then(function (response) {
        var menuItems = response.data; 
        $scope.menus = menuItems;
        console.log("menuItems: ",menuItems.length);
        $scope.menuwidth = {"width":100/menuItems.length+"%"} ;
    }, function (error) {
        $scope.menus = error;
    })
});

app.controller("quickLinkCtrl", function ($scope, quickLinksService) {
    var promise = quickLinksService.object.getMenu();
    console.log("call Starts....");
    promise.then(function (response) {
        $scope.quickMenu = response.data;
    }, function (error) {
        $scope.menus = error;
    })
});
