 angular.module('starter')

 .controller('inserisciAnnuncioCtrl',function($scope,$http){

   $scope.inserisci=function(){
     var link= "http://mercalinks.altervista.org/insert1.php";
     
     $http.get(link, {
       params: {
         tabella:"annunci",
         titolo:insert.titolo.value,
         descrizione:insert.descrizione.value,
         prezzo:insert.prezzo.value,
         immagine:insert.immagine.value,
         id_categoria:insert.id_categoria.value,
         id_posizione:insert.id_posizione.value,
         id_comune:insert.id_comune.value,
         id_utente:insert.id_utente.value

       }
     }).then(function(response){
       $scope.res = response.data;
       console.log($scope.res);
     });
   };
 });
