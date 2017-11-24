angular.module('starter')

.controller('AnnuncioCtrl', function($scope, $stateParams, $http, $ionicPopup, $window, $localStorage) {

  var link = "http://mercalinks.altervista.org/select2.php";
  $scope.id=$stateParams.annuncioId;

  $scope.addPref = function(id) {
    var pref = $localStorage.preferiti;
    pref.push("" + id + "");
    $localStorage.preferiti = pref;
    document.getElementById("btnRemPref").classList.add("annuncio_add_pref");

    document.getElementById("btnAddPref").classList.remove("annuncio_rem_pref");
  };

  $scope.isPref = function() {
    var pref = $localStorage.preferiti;
    if(pref.indexOf($scope.id) > -1) return true;
    else return false;
  }

  $scope.remPref = function(id) {
    var pref = $localStorage.preferiti;
    var index = pref.indexOf("" + id + "");
    if (index > -1) {
      pref.splice(index, 1);
    }
    $localStorage.preferiti = pref;
    document.getElementById("btnRemPref").classList.remove("annuncio_add_pref");
    document.getElementById("btnAddPref").classList.add("annuncio_rem_pref");
  };


  $scope.contatta = function(){
    $scope.alertPopup = $ionicPopup.show({
      scope: $scope,
      title: 'Contatta',
      buttons: [
        {
          text: 'Cancel'
         }
       ],
       templateUrl: 'templates/annuncio/contattaTemplate.html'
    });
    console.log($scope.buttons);
  };

  $scope.mailUser = function(utente,annuncio){

    cordova.plugins.email.open({
        to:      utente.email,
        subject: 'Mercalinks ad: '+ annuncio.titolo,
        body:    ''
    });
  };//end mailUser()

  $scope.close=function(){
    $scope.alertPopup.close();
  }

  $http.get(link,{
    params:{
      id: $scope.id,
      tabella: "annunci"
    }
  }).then(
    function(response){
      $scope.annuncio=response.data.annunci;
      $scope.annuncio.data_in = $scope.annuncio.data_in.split(" ")[0];
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
      $http.get(link,{
        params:{
          id: $scope.annuncio.id_comune,
          tabella: "comuni"
        }
      }).then(
        function(response){
          $scope.comune=response.data.comuni;
          console.log(response.data.comune);
        }
      ).catch(function(error){
        console.log(error);
      });
    }
  ).catch(function(error){
    console.log(error);
  });

});
