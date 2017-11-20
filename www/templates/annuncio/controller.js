angular.module('starter')

.controller('AnnuncioCtrl', function($scope, $stateParams, $http, $ionicPopup) {

  var link = "http://mercalinks.altervista.org/select2.php";
  var id=$stateParams.annuncioId;

  $scope.contatta = function(){
    var alertPopup = $ionicPopup.show({
      scope: $scope,
      title: 'Contatta',
      buttons: [
        {
          text: 'Cancel'
         }
       ],
       templateUrl: 'templates/annuncio/contattaTemplate.html'
    });
    alertPopup.then(function(res) {
           console.log(res);
        });
  };

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
