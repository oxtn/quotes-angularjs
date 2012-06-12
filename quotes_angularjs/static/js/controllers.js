var ang = angular.module('quotes', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});

ang.controller('QuotesCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.loaded = false;
    $http.get('list').success(function(data) {
        $scope.quotes = data;
        $scope.loaded = true;
    });
}]);
