angular.module('starter')

.controller('RegistrazioneCtrl', function($scope, $http, $localStorage, $ionicPopup) {
  function checkFields() {
    var alertText = "";
    if(reg.nome.value === "") {
      alertText += "Inserisci il nome";
      showPopup(alertText);
      return false;
    }
    if(reg.cognome.value === "") {
      alertText += "Inserisci il cognome";
      showPopup(alertText);
      return false;
    }
    if(reg.email.value === "") {
      alertText += "Inserisci un' email";
      showPopup(alertText);
      return false;
    }
    if(reg.pass.value === "") {
      alertText += "Inserisci una password";
      showPopup(alertText);
      return false;
    }
    if(reg.pass2.value === "") {
      alertText += "Inserisci di nuovo la password";
      showPopup(alertText);
      return false;
    }
    if(reg.tel.value === "") {
      alertText += "Inserisci un numero di telefono";
      showPopup(alertText);
      return false;
    }
    if(reg.pass.value !== reg.pass2.value) {
      alertText += "Le password non corrispondono";
      showPopup(alertText);
      return false;
    }

    return true;
  }

  function showPopup(text) {
    var alertPopUp = $ionicPopup.show({
      title: text,
      buttons: [{
        text: "OK",
        type: "button-default"
      }]
    }).then(function(res) {

    });
  }

  $scope.doRegistrazione = function() {
    if(checkFields()) {
      var link = "http://mercalinks.altervista.org/registrazione.php";
      var pass = CryptoJS.SHA1(reg.pass.value.trim());
      var hash_Base64 = pass.toString(CryptoJS.enc.Base64);
      console.log(hash_Base64);
      $http.get(link, {
        params: {
          nome: reg.nome.value,
          cognome: reg.cognome.value,
          email: reg.email.value,
          pass: hash_Base64,
          tel: reg.tel.value
        }
      }).then(function(res) {
        console.log(res.data);
      }).catch(function(error) {
        console.log(error);
      });
    }
  };
});
