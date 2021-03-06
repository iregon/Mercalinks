// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngStorage','ngCordova', 'ng-file-model', 'ngFileUpload'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inserisciAnnuncio', {
    url: '/inserisciAnnuncio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inserisciAnnuncio/inserisciAnnuncio.html',
        controller: 'inserisciAnnuncioCtrl'
      }
    }
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.registrazione', {
      url: '/registrazione',
      views: {
        'menuContent': {
          templateUrl: 'templates/registrazione/registrazione.html',
          controller: 'RegistrazioneCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.annunciUtente', {
      url: '/annunciUtente',
      views: {
        'menuContent': {
          templateUrl: 'templates/annunciUtente/annunciUtente.html',
          controller: 'AnnunciUtenteCtrl'
        }
      }
    })

    .state('app.annuncio', {
      url: '/annuncio/:annuncioId',
      views: {
        'menuContent': {
          templateUrl: 'templates/annuncio/annuncio.html',
          controller: 'AnnuncioCtrl'
        }
      }
    })

    .state('app.edit', {
      url: '/edit',
      views: {
        'menuContent': {
          templateUrl: 'templates/edit/edit.html',
          controller: 'EditCtrl'
        }
      }
    })

    .state('app.preferiti', {
      url: '/preferiti',
      views: {
        'menuContent': {
          templateUrl: 'templates/preferiti/preferiti.html',
          controller: 'PreferitiCtrl'
        }
      }
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
