angular.module('app').controller('mainController', function ($scope){
    $scope.clickHandler = function(){
        alert("Wowee a click event!");
    }
})