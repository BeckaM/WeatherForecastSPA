var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider) {
   
    $routeProvider
   
    .when('/', {
        templateUrl: '/pages/home.html',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});


weatherApp.controller('homeController', ['$scope', '$route', '$log', function($scope, $route, $log) {
    $log.info("Home controller");
}]);

weatherApp.controller('forecastController', ['$route', '$log', function($route, $log) {
    $log.info("Forecast controller");
}]);