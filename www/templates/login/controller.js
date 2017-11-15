angular.module('starter')

.controller('LoginCtrl', function($scope, $http, $timeout, $ionicModal) {

  $ionicModal.fromTemplateUrl('templates/login/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    // console.log('Doing login', $scope.loginData);

    var link = "http://mercalinks.altervista.org/login.php";
    $http.get(link, {
      params: {
        str: $scope.loginData.email
      }
    }).then(function(response) {
      $scope.annunci = response.data;
      console.log($scope.annunci);
    }).catch(function(error) {
      console.log(error);
    });

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   var link = "http://mercalinks.altervista.org/login.php";
    //   $http.post(link, {
    //     params: {
    //       str: $scope.loginData.email + ";" + $scope.loginData.password
    //     }
    //   }).then(function(response) {
    //     $scope.annunci = response.data;
    //     console.log($scope.annunci);
    //   }).catch(function(error) {
    //     console.log(error);
    //   });
    //   // $scope.closeLogin();
    // }, 3000);
  };
});
