angular.module('starter')

.controller('AnnunciUtenteCtrl', function($scope, $http, $timeout, $localStorage, $stateParams) {

  var link = "http://mercalinks.altervista.org/select1.php";
  //var nomeU= $stateParams.nome;
  var nomeU="Giulia";
  var idU=$localStorage.id_utente;
  $scope.annunciU = [];

  $http.get(link, {
    params: {
      tabella: "annunci"
    }
  }).then(function(response) {
    $scope.annunci = response.data.annunci;

    for(var i=0;i<$scope.annunci.length;i++){
      if($scope.annunci[i].id_utente == idU){
        $scope.annunciU.push($scope.annunci[i]);
      }
    }
    console.log($scope.annunci);
  }).catch(function(error) {
    console.log(error);
  });


});
