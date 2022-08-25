var app = angular.module('app', ['ngMaterial', 'ngRoute', 'ngMessages']);
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      template: '<home></home>'
    })
    .when('/percentage', {
      template: '<percentage></percentage>'
    })
    .when('/people', {
      template: '<people></people>'
    })
    .when('/people/:username', {
      template: '<peopledetails></peopledetails>'
    })
    .otherwise('/');
});