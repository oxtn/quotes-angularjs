var ang = angular.module('quotes', [], ['$routeProvider','$interpolateProvider', function ($routeProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
    
    var base_url = '/quotes-angularjs';    

    $routeProvider.
        when('/view/:id', { 
            template: base_url + '/view',
            controller: QuoteViewCtrl
       }).when('/list', {
            template: base_url + '/list',
            controller: QuoteListCtrl
       }).otherwise({
            redirectTo: base_url + '/'
       });
}]);

function QuoteListCtrl($scope, $http) {
    $scope.loaded = false;
    $http.get('list.json').success(function(data) {
        $scope.quotes = data;
        $scope.loaded = true;
    });
};
QuoteListCtrl.$inject = ['$scope','$http'];

function QuoteViewCtrl($scope, $http) {
    $scope.loaded = false;
    $http.get('view.json').success(function(data) {
        $scope.data = data;
        $scope.loaded = true;
    });
};
        
QuoteViewCtrl.$inject = ['$scope','$http'];
