angular.module('starter')

.controller('AnnunciUtenteCtrl', function($scope, $http, $timeout, $localStorage, $stateParams) {

  var link = "http://mercalinks.altervista.org/select1.php";
  //{"status":"OK","utente":{"0":"6","1":"utente12@gmail.com","2":"12","3":"Dodici",
  //"4":"DodiciCognome","5":"121212121212","id_utente":"6","email":"utente12@gmail.com",
  //"pass":"12","nome":"Dodici","cognome":"DodiciCognome","num_tel":"121212121212"}}
  var idU=$localStorage.id_utente["utente"]["id_utente"];
  $scope.nomeU=$localStorage.id_utente["utente"]["nome"];
  console.log(idU + $scope.nomeU);
  $scope.annunciU = [];

  /*
  idU=1;
  //*/
  //filtro gli annunci tenendomi quelli dell'utente
  $http.get(link, {
    params: {
      tabella: "annunci"
    }
  }).then(function(response) {
    annunci = response.data.annunci;

    for(var i=0;i<annunci.length;i++){
      if(annunci[i].id_utente == idU){
        $scope.annunciU.push(annunci[i]);
      }
    }
    console.log($scope.annunciU);
  }).catch(function(error) {
    console.log(error);
  });


});
