angular.module('starter')

.controller('AnnunciUtenteCtrl', function($scope, $http, $timeout, $localStorage, $stateParams) {

  var link = "http://mercalinks.altervista.org/select1.php";
  var idU=$localStorage.id_utente["utente"]["id_utente"];
  $scope.nomeU=$localStorage.id_utente["utente"]["nome"];
  $scope.annunciU = [];

  //filtro gli annunci tenendomi quelli dell'utente
  $http.get(link, {
    params: {
      tabella: "annunci"
    }
  }).then(function(response) {
    var annunci = response.data.annunci;
    for(var i=0;i<annunci.length;i++){
      if(annunci[i].id_utente == idU){
        $scope.annunciU.push(annunci[i]);
      }
    }
  }).catch(function(error) {
    console.log(error);
  });


  $scope.doRefresh= function(){
    $scope.annunciU = [];
    $http.get(link, {
      params: {
        tabella: "annunci"
      }
    }).then(function(response) {
      var annunci = response.data.annunci;
      for(var i=0;i<annunci.length;i++){
        if(annunci[i].id_utente == idU){
          $scope.annunciU.push(annunci[i]);
        }
      }
    }).catch(function(error) {
      console.log(error);
    }).finally(function() {
     // Stop the ion-refresher from spinning
     $scope.$broadcast('scroll.refreshComplete');
   });
  }


});
