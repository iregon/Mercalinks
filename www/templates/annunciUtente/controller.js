angular.module('starter')

.controller('AnnunciUtenteCtrl', function($scope, $state, $http, $timeout, $localStorage, $stateParams, $ionicPopup) {

  var link = "http://mercalinks.altervista.org/select1.php";
  var idU=$localStorage.id_utente["utente"]["id_utente"];
  $scope.nomeU=$localStorage.id_utente["utente"]["nome"];
  $scope.annunciU = [];

  //filtro gli annunci tenendomi quelli dell'utente
  $http.get(link, {
    params: {
      tabella: "annunci"
    }
  }).then(function(response) {
    var annunci = response.data.annunci;
    for(var i=0;i<annunci.length;i++){
      if(annunci[i].id_utente == idU){
        $scope.annunciU.push(annunci[i]);
      }
    }
  }).catch(function(error) {
    console.log(error);
  });

  $scope.gotoEdit = function(){
    $state.go('app.edit');
  }

  $scope.doRefresh= function(){
    $scope.annunciU=[];
    $scope.annunciU.length=0;
    console.log($scope.annunciU);
    $http.get(link, {
      params: {
        tabella: "annunci"
      }
    }).then(function(response) {
      var annunci = response.data.annunci;
      for(var i=0;i<annunci.length;i++){
        if(annunci[i].id_utente == idU){
          $scope.annunciU.push(annunci[i]);
        }
      }
    }).catch(function(error) {
      console.log(error);
    }).finally(function() {
     // Stop the ion-refresher from spinning
     $scope.$broadcast('scroll.refreshComplete');
   });
  }

  // $scope.toDoOnLongPress = function(){
  //   console.log("PorcoDio");
  // }
  //
  // $scope.toDoOnTouchEnd = function(){
  //   console.log("PorcaMadonna")
  // }

  $scope.deleteItem = function(){
    console.log("W la figa");
  }

  $scope.showConfirm = function(id) {
     var link = "http://mercalinks.altervista.org/delete.php";
     var confirmPopup = $ionicPopup.confirm({
       title: 'Elimina',
       template: 'Vuoi davvero eliminare questo annuncio?',

       buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
        text: 'Annulla',
        type: 'button-default',
      }, {
        text: 'OK',
        type: 'button-positive',
        onTap: function(e) {

          $http.get(link, {
            params: {
              tabella: 'annunci',
              id_annuncio: id
            }
          })//.then(function(){
          //   console.log("suca");
          // })
          $scope.doRefresh();
        }
      }]
     });

     // confirmPopup.then(function(res) {
     //   if(res) {
     //
     //   }
     // });
   };
})

// .directive('onLongPress', function($timeout){
//   return{
//     restrict: 'A',
//     link: function($scope, $elm, $attrs) {
// 			$elm.bind('touchstart', function(evt) {
// 				// Locally scoped variable that will keep track of the long press
// 				$scope.longPress = true;
//
// 				// We'll set a timeout for 600 ms for a long press
// 				$timeout(function() {
// 					if ($scope.longPress) {
// 						// If the touchend event hasn't fired,
// 						// apply the function given in on the element's on-long-press attribute
// 						$scope.$apply(function() {
// 							$scope.$eval($attrs.onLongPress)
// 						});
// 					}
// 				}, 600);
// 			});
//
// 			$elm.bind('touchend', function(evt) {
// 				// Prevent the onLongPress event from firing
// 				$scope.longPress = false;
//
//         if ($attrs.onTouchEnd) {
// 					$scope.$apply(function() {
// 						$scope.$eval($attrs.onTouchEnd)
// 					});
// 				}
//       });
//     }
//   };
// })
