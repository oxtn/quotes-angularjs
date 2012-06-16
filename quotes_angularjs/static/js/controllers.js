angular.module('quotes', [], ['$routeProvider','$interpolateProvider', '$locationProvider', function ($routeProvider, $interpolateProvider, $locationProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
    
    $routeProvider.
        when('/', {
            templateUrl: 'home.tmpl'
        }).when('/view/:id', { 
            templateUrl: 'view.tmpl',
            controller: QuoteViewCtrl
       }).when('/list', {
            templateUrl: 'list.tmpl',
            controller: QuoteListCtrl
       }).when('/add', {
            templateUrl: 'add.tmpl',
            controller: QuoteAddCtrl
       }); /*.otherwise({redirectTo:''});*/
              
       $locationProvider.html5Mode(true);
}]);

function BaseCtrl($scope, $http, $location, $routeParams) {
    $scope.loaded = false;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.routes = {
        Home: function() { return ""; },
        View: function(id) { return "view/" + id; },
        Add: function() { return "add/"; },
        List: function() { return "list/"; },
    };
};
BaseCtrl.$inject = ['$scope','$http','$location'];

function QuoteListCtrl($scope, $http){
    $http.get('list.json').success(function(data) {
        $scope.quotes = data;
        $scope.loaded = true;
    });
};
QuoteListCtrl.$inject = ['$scope','$http'];

function QuoteViewCtrl($scope, $http, $routeParams) {
    $scope.loaded = false;
    $scope.ctrl = "VIEW";
    $http.get('view/' + $routeParams.id + '.json').success(function(data) {
        $scope.data = data;
        $scope.loaded = true;
    });
};
        
QuoteViewCtrl.$inject = ['$scope','$http', '$routeParams'];

function QuoteAddCtrl($scope) {

};
QuoteAddCtrl.$inject = ['$scope'];
