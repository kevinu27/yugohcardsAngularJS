app.config( function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'parciales/home.html'
    }).when('/arena', {
        templateUrl: 'parciales/arena.html',
        controller: 'arenaCtrl'
    }).when('/card', {
        templateUrl: 'parciales/card.html'
    }).otherwise({
        redirectTo: '/'
    })
})