(function (){
    'use strict';

    angular.module('CounterApp',[])
        .controller('CounterController',CounterController)

    CounterController.$inject = ['$scope'];
    function CounterController($scope){
        $scope.onceCounter = 0;
        $scope.showNumberOfWatchers = function (){
            console.log('# of Watchers', $scope.$$watchersCount);
        }
    }


})();