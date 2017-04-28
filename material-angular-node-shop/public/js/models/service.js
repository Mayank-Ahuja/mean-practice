app.service("menuService", function ($http, $q) {
    this.object = {
        getMenu : function () {
            var defered = $q.defer();
            $http.get('/material-angular-node-shop/public/server/mainMenu.json').success(function (data) {
                defered.resolve(data);
            }).error(function (error) {
                defered.reject(error);
            });
            return defered.promise;
        }
    }
});
