angular.module('starter')

.controller('HomeCtrl', function($scope, $http){

  var link = "http://mercalinks.altervista.org/select1.php";
  $http.get(link, {
    params: {
      tabella: "annunci"
    }
  }).then(function(response) {
    $scope.annunci = response.data.annunci;
    console.log($scope.annunci);
  }).catch(function(error) {
    console.log(error);
  });
})
