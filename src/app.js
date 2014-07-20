var app = angular.module('MyApp', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/countries', {
      templateUrl: './partials/countries.html',
      controller: 'CountriesController'
    }) 
  })

app.controller('HomeController', function($scope, $location) {
    $scope.clicked = function() {
      // window.location.href = '/countries'
      console.log("hello world");
      $location.path('/countries');
    }
  })
  .controller('CountriesController', function($scope) {

  });
