angular.module('quotes', [], ['$routeProvider','$interpolateProvider', '$locationProvider', function ($routeProvider, $interpolateProvider, $locationProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
    
    var base_url = '/quotes-ang';    

    $routeProvider.
        when(base_url+'/view/:id.json', { 
            templateUrl: base_url + '/view.tmpl',
            controller: QuoteViewCtrl
       }).when(base_url+'/list', {
            templateUrl: base_url + '/ZOMG.html',
            controller: QuoteListCtrl
       });
              
       $locationProvider.html5Mode(true);
}]);

function QuoteListCtrl($scope, $http, $location) {
    $scope.loaded = false;
    $scope.ctrl ="LIST";
    $scope.$location = $location;
    $http.get('/quotes-ang/list.json').success(function(data) {
        $scope.quotes = data;
        $scope.loaded = true;
    });
};
QuoteListCtrl.$inject = ['$scope','$http','$location'];

function QuoteViewCtrl($scope, $http, $routeParams) {
    $scope.loaded = false;
    $scope.ctrl = "VIEW";
    $http.get('/quotes-ang/view/' + $routeParams.id + '.json').success(function(data) {
        $scope.data = data;
        $scope.loaded = true;
    });
};
        
QuoteViewCtrl.$inject = ['$scope','$http','$routeParams'];
