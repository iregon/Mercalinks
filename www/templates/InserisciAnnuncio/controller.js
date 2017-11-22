 angular.module('starter')

 .controller('inserisciAnnuncioCtrl',function($scope,$http,$ionicPopup,$localStorage){
   //$scope.testFile={};
   var link = "http://mercalinks.altervista.org/select1.php";
   $http.get(link, {
     params: {
       tabella: "categorie"
     }
   }).then(function(response) {
     $scope.categorie = response.data.categorie;
     console.log($scope.categorie);
   }).catch(function(error) {
     console.log(error);
   });


   $scope.controllo=function(){
     if(insert.titolo.value===""){
       var alertPopup=$ionicPopup.show({
         title:'Inserisci il titolo',
         buttons:[{
           text:'OK',
           type: 'button-default'

     }]

   });
     alertPopup.then(function(res){
       console.log(res);

       });
 return false;
     }else{
       if(insert.descrizione.value===""){
         var alertPopup=$ionicPopup.show({
           title:'Inserisci la descrizione',
           buttons:[{
             text:'OK',
             type: 'button-default'

       }]

         });
         alertPopup.then(function(res){
           console.log(res);

         });
 return false;
       }
       else{
         if(insert.prezzo.value===""){
           var alertPopup=$ionicPopup.show({
             title:'Inserisci il prezzo',
             buttons:[{
               text:'OK',
               type: 'button-default'

         }]

           });
           alertPopup.then(function(res){
             console.log(res);

           });
            return false;
         }
         else{
        $scope.messaggio();
         }
       }
     }
     return true;
   }





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
     $scope.testFile = {};
     if($scope.controllo()){
       var link= 'http://mercalinks.altervista.org/add_product.php';
       var data={titolo:insert.titolo.value,
       descrizione:insert.descrizione.value,
       prezzo:insert.prezzo.value,
       immagine:insert.immagine.value,
       id_utente:$localStorage.id_utente.utente.id_utente,
       id_categoria:insert.id_categoria.value,
       id_posizione:insert.id_posizione.value,
       id_comune:insert.id_comune.value};

       console.dir($scope.testFile);
       

       $http.post(link, {data}).then(function (res){
            $scope.response = res.data;
        });

     };
   }
 });
