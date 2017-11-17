angular.module('starter')

.controller('AnnuncioCtrl', function($scope, $stateParams, $http) {

  var link = "http://mercalinks.altervista.org/select2.php";
  var id=$stateParams.annuncioId;
  //console.log(id);
  $http.get(link,{
    params:{
      id: id,
      tabella: "annunci"
    }
  }).then(
    function(response){
      $scope.annuncio=response.data.annunci;
      console.log(response.data.annuncio);
      $http.get(link,{
        params:{
          id: $scope.annuncio.id_utente,
          tabella: "utenti"
        }
      }).then(
        function(response){
          $scope.utente=response.data.utenti;
          console.log(response.data.utente);
        }
      ).catch(function(error){
        console.log(error);
      });
    }
  ).catch(function(error){
    console.log(error);
  });
});
