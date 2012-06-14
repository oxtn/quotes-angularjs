angular.module('quotes', [], ['$routeProvider','$interpolateProvider', '$locationProvider', function ($routeProvider, $interpolateProvider, $locationProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
    
    var base_url = '/quotes-ang';    

    $routeProvider.
        when(base_url+'/view/:id', { 
            templateUrl: base_url + '/Zview.html',
            controller: QuoteViewCtrl
       }).when(base_url+'/list', {
            templateUrl: base_url + '/ZOMG.html',
            controller: QuoteListCtrl
       });
              
       $locationProvider.html5Mode(true);
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
