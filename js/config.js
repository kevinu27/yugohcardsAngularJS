app.config( function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'parciales/home.html'
    }).when('/arena', {
        templateUrl: 'parciales/arena.html',
        controller: 'arenaCtrl'
    }).when('/card/:id', {
        templateUrl: 'parciales/card.html',
        controller: 'cardCtrl'
    }).otherwise({
        redirectTo: '/'
    })
});