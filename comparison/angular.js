var app = angular.module('ang', []);
app.controller('angController', function($scope, $http) {
    $http.get(utahHomeless).then((r) => $scope.r = r);
});