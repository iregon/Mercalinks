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
      $http.get(link, {
        params: {
          nome: reg.nome.value,
          cognome: reg.cognome.value,
          email: reg.email.value,
          pass: CryptoJS.SHA1(reg.pass.value),
          tel: reg.tel.value
        }
      }).then(function(res) {
        console.log("Utente registrato");
      }).catch(function(error) {
        console.log(error);
      });
    }
  };
});
