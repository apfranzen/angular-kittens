(function() {

  'use strict';

  angular
    .module('myApp.components.new', [])
    .controller('newController', newController);

  newController.$inject = ['$scope'];

  function newController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
