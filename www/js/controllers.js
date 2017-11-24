angular.module('starter.controllers', ['ngCordova'])

.factory('Annunci', function(){
  var annunci = {};
  return{
    getAnnunci: function(){
      return annunci;
    },

    setAnnunci: function(param){
      annunci = param;
    }
  }
})



.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage, $http, $rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.logout = function() {
    $localStorage.id_utente = "";
    window.location.href = "#/app/home";
  };

  $scope.is_user_logged = function() {
    // console.log($localStorage.id_utente.utente);
    var user_info = $localStorage.id_utente;
    if($localStorage.id_utente.utente != undefined) {
      //console.log("Logged");
      $scope.user_data = $localStorage.id_utente;
      return true;
    }
    else {
      //console.log("Not logged");
      return false;
    }
  };

  /*Categorie*/

  var link = "http://mercalinks.altervista.org/select1.php";
  $http.get(link, {
    params: {
      tabella: "categorie"
    }
  }).then(function(response) {
    $scope.categorie = response.data.categorie;
  }).catch(function(error) {
    console.log(error);
  });

  var link = "http://mercalinks.altervista.org/getAllProvince.php";
  $http.get(link, {
  }).then(function(response) {
    $scope.province=response.data.province;
  }).catch(function(error) {
    console.log(error);
  });

  Array.prototype.indexOf || (Array.prototype.indexOf = function(d, e) {
    var a;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var c = Object(this),
        b = c.length >>> 0;
    if (0 === b) return -1;
    a = +e || 0;
    Infinity === Math.abs(a) && (a = 0);
    if (a >= b) return -1;
    for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
        if (a in c && c[a] === d) return a;
        a++
    }
    return -1
  });
})
