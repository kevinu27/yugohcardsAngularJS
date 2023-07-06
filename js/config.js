app.config( function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'parciales/home.html'
    }).when('/arena', {
        templateUrl: 'parciales/arena.html'
    }).otherwise({
        redirectTo: '/'
    })
})