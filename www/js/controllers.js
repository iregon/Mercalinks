angular.module('starter.controllers', [])

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



.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage, $http) {

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

  $scope.is_user_logged = function() {
    // console.log($localStorage.id_utente.utente);
    var user_info = $localStorage.id_utente;
    if($localStorage.id_utente.utente != undefined) {
      console.log("Logged");
      $scope.user_data = $localStorage.id_utente;
      return true;
    }
    else {
      console.log("Not logged");
      return false;
    }
  };

  /*Categorie*/

  var link = "http://mercalinks.altervista.org/select1.php";

  //filtro gli annunci tenendomi quelli dell'utente
  $http.get(link, {
    params: {
      tabella: "categorie"
    }
  }).then(function(response) {
    $scope.categorie = response.data.categorie;
  }).catch(function(error) {
    console.log(error);
  });


  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
      document.getElementById('catg').style="margin-bottom:0px";
    } else {
      $scope.shownGroup = group;
      document.getElementById('catg').style="margin-bottom:10px";
    }
    // $ionicScrollDelegate.resize();
  }

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  }
})

.controller('PlaylistsCtrl', function($scope, $http) {
  // $scope.playlists = [
  //   { title: 'Reggae', id: 1 },
  //   { title: 'Chill', id: 2 },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 }
  // ];

})
/*.controller('AnnuncioCtrl', function($scope, $stateParams) {

});
*/
