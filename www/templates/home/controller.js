angular.module('starter')

.controller('HomeCtrl', function($scope, $http){
 // $scope.chiamataHttp(function(){
 var page = 1;

 $scope.loadAnnunci = function() {
   var link = "http://mercalinks.altervista.org/select3.php";
   $http.get(link, {
     params: {
       tabella: "annunci",
       page: page
     }
   }).then(function(response) {
     $scope.annunci = response.data.annunci;
     //console.log($scope.annunci);
   }).catch(function(error) {
     console.log(error);
   });
 }

    $scope.doRefresh= function(){
      $http.get(link, {
        params: {
          tabella: "annunci"
        }
      }).then(function(response) {
        $scope.annunci = response.data.annunci;
        //console.log($scope.annunci);
      }).catch(function(error) {
        console.log(error);
      }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
    }

    $scope.loadMore = function() {
      page++;
      $scope.loadAnnunci();
    }
});
