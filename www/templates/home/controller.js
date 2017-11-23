angular.module('starter')

.controller('HomeCtrl', function($scope, $http){
 // $scope.chiamataHttp(function(){
 var page = 1;
 var fine = 0;

 var action = "";

 $scope.loadAnnunci = function() {
   var link = "http://mercalinks.altervista.org/select3.php";
   $http.get(link, {
     params: {
       tabella: "annunci",
       page: page
     }
   }).then(function(response) {
     $scope.annunci = response.data.annunci;
     fine = response.data.fine;
     //console.log($scope.annunci);
     if (action === "refresh") $scope.$broadcast('scroll.refreshComplete');
     else if (action === "scroll") $scope.$broadcast('scroll.infiniteScrollComplete');
   }).catch(function(error) {
     console.log(error);
   });
 }

 $scope.doRefresh= function(){
   page = 1;
   fine = 0;
   action = "refresh";
   $scope.loadAnnunci();
 }

 $scope.loadMore = function() {
   if (fine == 0) {
     page++;
     action = "scroll";
     $scope.loadAnnunci();
   }
 }
});
