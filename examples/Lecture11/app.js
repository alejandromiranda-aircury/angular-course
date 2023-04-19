(function (){
    'use strict';

    angular.module('MsgApp',[])
        .controller('MsgController',MsgController)
        .filter('loves',LovesFilter)
        .filter('truth',TruthFilter);

    MsgController.$inject = ['$scope','$filter', 'lovesFilter'];
    function MsgController($scope,$filter,lovesFilter) {
        $scope.name = "Alejandro";
        $scope.cookieCost = .45;
        $scope.sayMessage = function (){
            var msg ="Alejandro likes to eat sushi! :)";
            var output = $filter('uppercase')(msg);
            return output;
        }
        $scope.sayLovesMessage = function (){
            var msg ="Alejandro likes to eat sushi! :)";
            msg = lovesFilter(msg);
            return msg;
        }
    }

    function LovesFilter() {
        return function(input){
            input = input || "";
            input = input.replace("likes","loves");
            return input;
        }
    }

    function TruthFilter() {
        return function (input, target, replace){
            input = input || ""
            return input.replace(target,replace);
        }
    }
})();