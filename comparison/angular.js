var app = angular.module('ang', []);
app.controller('angController', function($scope, $http) {
    $http.get(weatherApiUrl).then((r) => {
        $scope.name = r.data.city.name;
        $scope.list = r.data.list;
    });
});