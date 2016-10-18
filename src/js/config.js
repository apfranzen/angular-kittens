(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($rootScope) {
      $rootScope.kittens = [
        {
          name: 'Fluffy',
          pic_url: 'http://placekitten.com/200/300',
          bio: 'meow meow meow',
          likes: 1
        },
        {
          name: 'Johnny',
          pic_url: 'https://placebear.com/200/300',
          bio: 'Blah Blah Blah',
          likes: 2
        },
        {
          name: 'Hairy',
          pic_url: 'http://placehold.it/200x300',
          bio: 'purrr purrr purrr',
          likes: 3
        }
      ];
    });

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/new', {
      templateUrl: 'js/components/new/new.view.html',
      controller: 'newController',
      controllerAs: 'newCtrl'
    });
  }

})();
