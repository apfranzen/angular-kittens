(function() {

  'use strict';

  angular
    .module('myApp.components.new', [])
    .controller('newController', newController);

  newController.$inject = ['$rootScope'];

  function newController($rootScope, newKitten) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';

    console.log('rootScope: ', $rootScope);

    this.add = function(newKitten) {
      $rootScope.kittens.push(newKitten);
      console.log(newKitten);
    };
  }

})();
