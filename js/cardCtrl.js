app.controller('cardCtrl', ['$scope', '$routeParams', '$rootScope', function($scope, $routeParams, $rootScope){
    console.log(' se ha cargado el card controller')
    $scope.id = $routeParams.id;
    console.log('rootScope', $rootScope.cardsData)
    // console.log('$scope.jsonCardsArrayToIterate', $parent.jsonCardsArrayToIterate)
    // $scope.CardToShow = $parent.jsonCardsArrayToIterate


}])