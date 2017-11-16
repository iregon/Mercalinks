angular.module('starter')

.controller('AnnunciUtenteCtrl', function($scope, $http, $timeout, $localStorage) {

  var link = "http://mercalinks.altervista.org/select1.php";
  var nomeU="Giulia";
  var idU=0;

  $http.get(link, {
    params: {
      tabella: "utenti"
    }
  }).then(function(response) {
    $scope.utenti = response.data.utenti;
    //in teoria scorro la lista di utenti e prendo l'id di quello che ha effettuato l'accesso (nomeU)
    for(var i=0;i<$scope.utenti.length;i++){
      if($scope.utenti[i].nome == nomeU){
        idU=$scope.utenti[i].id_utente;
        break;
      }
    }
    console.log($scope.utenti);
  }).catch(function(error) {
    console.log(error);
  });

  $http.get(link, {
    params: {
      tabella: "annunci"
    }
  }).then(function(response) {
    $scope.annunci = response.data.annunci;
    //sempre in teoria tolgo gli annunci che non sono di quell'utente
    for(var i=0;i<$scope.annunci.length;i++){
      if($scope.annunci[i].id_utente != idU){
        $scope.annunci[i]=$scope.annunci[$scope.annunci.length-1];
        $scope.annunci.pop();
      }
    }
    console.log($scope.annunci);
  }).catch(function(error) {
    console.log(error);
  });


});
