var bigApp = angular.module('bigApp', ['ngRoute']);

    bigApp.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                            templateUrl: 'views/login.html',
                            controller: 'LoginController'
                        })
            .when('/register', {
                            templateUrl: 'views/newuser.html',
                            controller: 'LoginController'
                        })
            .when('/registrations/new', {
                templateUrl: 'views/register.html',
                controller: 'RegisterController'
            })
            .when('/registrations', {
                templateUrl: 'views/overview.html',
                controller: 'OverviewController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);