angular.module('Shoppingcart', [])
    .controller('CartController', function($scope) {
            $scope.sta = function() 
            {
                $scope.fp = 500
                $scope.price1 =  $scope.f1 * $scope.fp;
            };

            $scope.clo = function() 
            {
                $scope.fp = 500
                $scope.price2 =  $scope.f2 * $scope.fp;

            };

            $scope.mob = function() 
            {
                $scope.fp = 500
                $scope.price3 =  $scope.f3 * $scope.fp;
            };

            $scope.lap = function() 
            {
                $scope.fp = 500
                $scope.price4 =  $scope.f4 * $scope.fp;
            };

            $scope.add = function()
            {
                $scope.totalP = $scope.price1 + $scope.price2 + $scope.price3 + $scope.price4; 
            };

    });