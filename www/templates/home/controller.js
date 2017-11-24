angular.module('starter')

.controller('HomeCtrl', function($scope, $http, $stateParams, $rootScope){
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
     annunci1 = response.data.annunci;
     if($rootScope.cat!=null){
       for(var i=0;i<annunci1.length;i++){
         if(annunci[i].id_categoria == $rootScope.cat){
           $scope.annunci.push(annunci1[i]);
         }
       }
     }else{
       $scope.annunci=annunci1;
     }
     if($rootScope.prezzo!=null){
      if($rootScope.prezzo==1){
        $scope.annunci=annunci1.sort();
      }
      if($rootScope.prezzo==2){
        $scope.annunci=annunci1.reverse();
      }
    }else{
      $scope.annunci=annunci1;
    }
     fine = response.data.fine;
     if (action === "refresh") $scope.$broadcast('scroll.refreshComplete');
     if (action === "scroll") $scope.$broadcast('scroll.infiniteScrollComplete');
   }).catch(function(error) {
     console.log(error);
   });
 }

 $scope.moreData = function() {
   if (fine == 0) return true;
   else return false;
 }

 $scope.doRefresh = function(){
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
