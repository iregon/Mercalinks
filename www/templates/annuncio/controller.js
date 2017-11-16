angular.module('starter')

.controller('AnnuncioCtrl', function($scope, $stateParams, $http) {

  var link = "http://mercalinks.altervista.org/select.php";
  var id=$stateParams.annuncioId;
  //console.log(id);
  $http.get(link,{
    params:{
      id: id
    }
  }).then(
    function(response){
      $scope.annuncio=response.data.annuncio;
      console.log(response.data.annuncio);
    }
  ).catch(function(error){
    console.log(error);
  });
});
