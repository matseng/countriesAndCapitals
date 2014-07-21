var app = angular.module('MyApp', ['ngRoute']);

app.config(function($locationProvider, $routeProvider) {
    // $locationProvider.html5Mode(true);  //TODO: not working when copy paste url into browser
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

app.controller('HomeController', function($scope, $location, $http) {
    $scope.clicked = function() {
      $location.path('/countries');

    }
  })
  .controller('CountriesController', function($scope, $http) {
      var url = 'http://api.geonames.org/countryInfoJSON?';
      params = {username: 'matseng'}
      $http({
        method: 'GET',
        url: url,
        params: params
      })
      .success(function(data, status) {
        console.log("hello world", data, status);
      })
      .error(function(data, status) {
        console.log("hello world", data, status);
      })
  });
