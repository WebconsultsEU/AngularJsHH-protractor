'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    $scope.speed = 0;
    $scope.area = 'Ausserorts';

    var fees = {
        Ausserorts: {
            10: 10,
            15: 20,
            20: 30,
            25: 70
        },
        Innerorts: {
            10: 15,
            15: 25,
            20: 35,
            25: 80
        }
    };

    $scope.submit = function() {
        var not_found = true;

        angular.forEach(fees[$scope.area], function(fee, speed) {
            if (not_found) {
                if ($scope.speed < speed) {
                    $scope.fee = fee;
                    not_found = false;
                }
            }
        });

        if (not_found) $scope.fee = 1909;
    };

    $scope.fee = false;
}]);