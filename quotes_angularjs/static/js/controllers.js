var ang = angular.module('quotes', [], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});

ang.controller('QuotesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('list').success(function(data) {
        $scope.quotes = data;
    });
}]);
