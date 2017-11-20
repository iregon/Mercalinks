 angular.module('starter')

 .controller('inserisciAnnuncioCtrl',function($scope,$http,$ionicPopup){
   // $scope.controllo=function(){
   //   if(insert.titolo.value===null){
   //     var alertPopup=$ionicPopup.show({
   //       title:'Inserisci il titolo'
   //       buttons:[{
   //         text:'OK',
   //         type: 'button-default'
   //
   //   }]
   // });
   //   alertPopup.then(function(res){
   //     console.log(res);
   //
   //     });
   //   }else{
   //     if(insert.descrizione.value===null){
   //       var alertPopup=$ionicPopup.show({
   //         title:'Inserisci la descrizione'
   //         buttons:[{
   //           text:'OK',
   //           type: 'button-default'
   //
   //     }]
   //       });
   //       alertPopup.then(function(res){
   //         console.log(res);
   //       });
   //     }
   //     else{
   //       if(insert.prezzo.value===null){
   //         var alertPopup=$ionicPopup.show({
   //           title:'Inserisci il prezzo'
   //           buttons:[{
   //             text:'OK',
   //             type: 'button-default'
   //
   //       }]
   //         });
   //         alertPopup.then(function(res){
   //           console.log(res);
   //         });
   //       }
   //       else{
   //         if(insert.immagine.value===null){
   //           var alertPopup=$ionicPopup.show({
   //             title:'Inserisci immagine'
   //             buttons:[{
   //               text:'OK',
   //               type: 'button-default'
   //
   //         }]
   //           });
   //           alertPopup.then(function(res){
   //             console.log(res);
   //           });
   //         }
   //         else{
   //           // $scope.messaggio();
   //         }
   //       }
   //     }
   //   }
   // }




   $scope.messaggio=function(){
     var alertPopup=$ionicPopup.show({
       title:'<img src="/img/tick.png">',
       subTitle:'<h4>Annuncio inserito</h4>',
       buttons:[{
         text:'OK',
         type: 'button-default'

   }]
     });
     alertPopup.then(function(res){
       console.log(res);
     });
   };

   $scope.inserisci=function(){
     var link= "http://mercalinks.altervista.org/insert1.php";

     $http.get(link, {
       params: {
         tabella:"annunci",
         titolo:insert.titolo.value,
         descrizione:insert.descrizione.value,
         prezzo:insert.prezzo.value,
         immagine:insert.immagine.value,
         id_categoria:insert.id_categoria.value,
         id_posizione:insert.id_posizione.value,
         id_comune:insert.id_comune.value,
         id_utente:insert.id_utente.value

       }
     }).then(function(response){

     });

   };
 });
