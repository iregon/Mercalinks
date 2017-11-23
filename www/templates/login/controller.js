angular.module('starter')

.controller('LoginCtrl', function($scope, $http, $timeout, $localStorage) {

  $scope.closeLogin = function() {
    // $scope.modal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    var link = "http://mercalinks.altervista.org/login.php";
    var cryptedPass = CryptoJS.SHA1($scope.loginData.password.trim());
    // console.log(cryptedPass.toString(CryptoJS.enc.Base64));
    var param = $scope.loginData.email.trim() + "###" + cryptedPass + "###";
    var iv =  CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");
    var key = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    var hashDigest = CryptoJS.AES.encrypt(param, key, {iv:iv});

    $http.get(link, {
      params: {
        str: hashDigest.ciphertext.toString(CryptoJS.enc.Base64)
      }
    }).then(function(response) {
      var res = response.data;
      console.log(res["status"]);
      if(res["status"] === "OK") {
        // console.log($scope.res);
        $localStorage.id_utente = res;
        var date = new Date();
        $localStorage.last_login = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
        console.log($localStorage.last_login);
        window.location.href = "#/app/annunciUtente";
      }
    }).catch(function(error) {
      console.log(error);
    });

    $scope.closeLogin();
  };
});
