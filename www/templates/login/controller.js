angular.module('starter')

.controller('LoginCtrl', function($scope, $http, $timeout, $localStorage) {

  $scope.closeLogin = function() {
    // $scope.modal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    var link = "http://mercalinks.altervista.org/login.php";
    var param = $scope.loginData.email + ";" + $scope.loginData.password;
    var iv =  CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");
    var key = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    var hashDigest = CryptoJS.AES.encrypt(param, key, {iv:iv});

    $http.get(link, {
      params: {
        str: hashDigest.ciphertext.toString(CryptoJS.enc.Base64)
      }
    }).then(function(response) {
      $scope.res = response.data;
      console.log($scope.res);
      $localStorage.id_utente = $scope.res["id"];
    }).catch(function(error) {
      console.log(error);
    });

    $scope.closeLogin();

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
