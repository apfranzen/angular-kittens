(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope'];

  function mainController($scope) {
    /*jshint validthis: true */
    this.kittens = [
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
]
  }

})();
