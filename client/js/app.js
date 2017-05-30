var app = angular.module('contacts', ['ngMaterial', 'ngRoute'])

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'mainCtrl'
    })
    .when('/contact/:id', {
      templateUrl: 'templates/contact.html',
      controller: 'contactCtrl'
    })
  $locationProvider.html5Mode(true)
})
