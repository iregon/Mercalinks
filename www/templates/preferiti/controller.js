angular.module('starter')

.controller('PreferitiCtrl', function($scope, $http, $localStorage){
   var link = "http://mercalinks.altervista.org/select1.php";
   $http.get(link, {
     params: {
       tabella: "annunci"
     }
   }).then(function(response) {
     var annunci = response.data.annunci;
     var annunci2 = [];
    var pref = $localStorage.preferiti;
     annunci.forEach(function(element) {
        pref.forEach(function(preferito) {
          if(element["id_annuncio"] == preferito) {
            annunci2.push(element);
          }
        });
    });
    $scope.annunci = annunci2;

   }).catch(function(error) {
     console.log(error);
   });

    $scope.doRefresh= function(){
      $http.get(link, {
        params: {
          tabella: "annunci"
        }
      }).then(function(response) {
        $scope.annunci = response.data.annunci;
      }).catch(function(error) {
        console.log(error);
      }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
    }

});
