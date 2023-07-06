var app = angular.module('yugiohApp', ['ngRoute']) // yugioh es el nombre del proyecto

app.controller('yugiohCardsCrtl', ['$scope', '$http', function($scope, $http){

    this.cards = cards
    $scope.cards = cards
    $scope.mostrarCartas= false
    $scope.rutaHtml ='parciales/navbar.html'
    $scope.cardsData = []
    

    $scope.sliderValue = 0;
    $scope.sliderChanged = function() {
        $scope.jsonCardsArrayToIterate = $scope.cardsData
        // console.log('$scope.cardsData', $scope.cardsData)
        console.log('$scope.jsonCardsArrayToIterate', $scope.jsonCardsArrayToIterate)

        console.log('Slider value:', $scope.sliderValue);
        // console.log('$scope.jsonCardsArrayToIterate', $scope.jsonCardsArrayToIterate)
        $scope.jsonCardsArrayToIterate = $scope.jsonCardsArrayToIterate.filter( card => {
            console.log('$scope.jsonCardsArrayToIterate', card.atk)
           return  card.atk > $scope.sliderValue
        })
        console.log('$scope.jsonCardsArrayToIterate', $scope.jsonCardsArrayToIterate.length)
    };

    $scope.mostrarNombreCard = function(){
        console.log('$scope.cards')
        $scope.mostrarCartas= !$scope.mostrarCartas
    }
    $scope.barajarNombreCard = function(){
        console.log('brajar')
        let currentIndex = $scope.jsonCardsArrayToIterate.length,  randomIndex;
          
        while (currentIndex != 0) {
      
          // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [$scope.jsonCardsArrayToIterate[currentIndex], $scope.jsonCardsArrayToIterate[randomIndex]] = [
            $scope.jsonCardsArrayToIterate[randomIndex], $scope.jsonCardsArrayToIterate[currentIndex]];
        }
      
    }
    // $scope.listaParaBucle = ['a', 'v', 'c']
    $scope.jsonCards = {}
    $scope.jsonCards2 = {}

    $http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php').then(function(data){
        // $scope.jsonCards = data

        // console.log($scope.jsonCards.data.data[100])
        // console.log($scope.jsonCards.data.data)
        // $scope.jsonCardsArrayToIterate = [] 
        // $scope.jsonCards.data.data.forEach(element => {
        //     $scope.jsonCardsArrayToIterate.push(element)
        // });
        // console.log('$scope.jsonCardsArrayToIterate', $scope.jsonCardsArrayToIterate)

    })

    $http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster').then(function(data2){
        $scope.jsonCards2 = data2
        console.log('entro')

        console.log($scope.jsonCards2)
        console.log($scope.jsonCards2.data.data[100])
        console.log($scope.jsonCards2.data.data)
        $scope.jsonCardsArrayToIterate = [] 
        $scope.jsonCards2.data.data.forEach(element => {
            $scope.jsonCardsArrayToIterate.push(element)
        });
          console.log('-----', $scope.jsonCardsArrayToIterate)
        $scope.cardsData = $scope.jsonCardsArrayToIterate


    })

}])

const cards = {
    carta1: 'mago',
    carta2: 'dragon'
}