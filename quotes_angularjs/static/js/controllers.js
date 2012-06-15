angular.module('quotes', [], ['$routeProvider','$interpolateProvider', '$locationProvider', function ($routeProvider, $interpolateProvider, $locationProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
    
    var base_url = '/quotes-ang';    

    $routeProvider.
        when(base_url+'/', {
            templateUrl: base_url + '/home.tmpl'
        }).when(base_url+'/view/:id', { 
            templateUrl: base_url + '/view.tmpl',
            controller: QuoteViewCtrl
       }).when(base_url+'/list', {
            templateUrl: base_url + '/list.tmpl',
            controller: QuoteListCtrl
       }).when(base_url+'/add', {
            templateUrl: base_url + '/add.tmpl',
            controller: QuoteAddCtrl
       });
              
       $locationProvider.html5Mode(true);
}]);

function BaseCtrl($scope, $http, $location, $routeParams) {
    $scope.loaded = false;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.routes = {
        Home: function() { return "/quotes-ang/"; },
        View: function(id) { return "/quotes-ang/view/" + id; },
        Add: function() { return "/quotes-ang/add/"; },
        List: function() { return "/quotes-ang/list/"; },
    };
};
BaseCtrl.$inject = ['$scope','$http','$location'];

function QuoteListCtrl($scope, $http){
    $http.get('/quotes-ang/list.json').success(function(data) {
        $scope.quotes = data;
        $scope.loaded = true;
    });
};
QuoteListCtrl.$inject = ['$scope','$http'];

function QuoteViewCtrl($scope, $http, $routeParams) {
    $scope.loaded = false;
    $scope.ctrl = "VIEW";
    $http.get('/quotes-ang/view/' + $routeParams.id + '.json').success(function(data) {
        $scope.data = data;
        $scope.loaded = true;
    });
};
        
QuoteViewCtrl.$inject = ['$scope','$http', '$routeParams'];

function QuoteAddCtrl($scope) {

};
QuoteAddCtrl.$inject = ['$scope'];
