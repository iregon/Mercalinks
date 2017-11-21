angular.module('starter')

.controller('HomeCtrl', function($scope, $http){
 // $scope.chiamataHttp(function(){
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
 // })

    $scope.doRefresh= function(){
      $http.get(link, {
        params: {
          tabella: "annunci"
        }
      }).then(function(response) {
        $scope.annunci = response.data.annunci;
        console.log($scope.annunci);
      }).catch(function(error) {
        console.log(error);
      }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
<<<<<<< HEAD



=======
  }).then(function(response) {
    $scope.annunci = response.data.annunci;
    //console.log($scope.annunci);
  }).catch(function(error) {
    console.log(error);
  });
>>>>>>> 10590a76f1035f80822272a2b4cdbf0964a37a88
});
