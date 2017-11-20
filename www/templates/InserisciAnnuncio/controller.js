 angular.module('starter')

 .controller('inserisciAnnuncioCtrl',function($scope,$http){

   $scope.inserisci=function(){
     var link= "http://mercalinks.altervista.org/insert1.php";
     $http.get(link, {
       params: {
         tabella:"annunci",
         titolo:$scope.titolo,
         descrizione:$scope.descrizione,
         data_in:$scope.data_in,
         prezzo:$scope.prezzo,
         id_categoria:$scope.id_categoria,
         id_posizione:$scope.id_posizione,
         id_comune:$scope.id_comune,
         id_utente:$scope.id_utente

       }
     }).then(function(response){
       
     });
   };
 });
