angular.module('starter')

.controller('CategoriaCtrl', function($scope, $http, $stateParams){
 // $scope.chiamataHttp(function(){
   var link = "http://mercalinks.altervista.org/select1.php";
   $scope.annunciC = [];
   idC=$stateParams.id_categoria;
   $scope.nome="";

   $http.get(link, {
     params: {
       tabella: "categorie"
     }
   }).then(function(response) {
     var categorie = response.data.categorie;
     for(var i=0;i<categorie.length;i++){
       if(categorie[i].id_categoria == idC){
         $scope.nome=categorie[i].nome;
       }
      }
   }).catch(function(error) {
     console.log(error);
   });

   $http.get(link, {
     params: {
       tabella: "annunci"
     }
   }).then(function(response) {
     var annunci = response.data.annunci;
     for(var i=0;i<annunci.length;i++){
       if(annunci[i].id_categoria == idC){
         $scope.annunciC.push(annunci[i]);
       }
      }
   }).catch(function(error) {
     console.log(error);
   });

    $scope.doRefresh= function(){
      $http.get(link, {
        params: {
          tabella: "annunci"
        }
      }).then(function(response) {
        var annunci = response.data.annunci;
        for(var i=0;i<annunci.length;i++){
          if(annunci[i].id_categoria == idC){
            $scope.annunciC.push(annunci[i]);
          }
         }
      }).catch(function(error) {
        console.log(error);
      }).finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
    }

});
