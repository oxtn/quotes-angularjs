var ang = angular.module('quotes', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});

ang.controller('QuotesCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.loaded = false;
    $http.get('list.json').success(function(data) {
        $scope.quotes = data;
        $scope.loaded = true;
    });
}]);
