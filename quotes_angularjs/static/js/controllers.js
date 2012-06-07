var ang = angular.module('quotes', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});

ang.controller('QuotesCtrl', ['$scope', function($scope) {
    $scope.quotes = [
        {"quote": "Test 1"},
        {"quote": "test 2"}
    ];
}]);
