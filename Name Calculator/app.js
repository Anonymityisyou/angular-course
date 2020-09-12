(function(){
    'use strict'
    
    angular.module('FirstAngularApp',[])
    .controller('divController',function($scope)
    {
        $scope.name ="";
        
        $scope.nameValue = function()
        {
            $scope.total=0;
            for(var i=0;i<$scope.name.length;i++)
            {
                $scope.total = $scope.total + $scope.name.charCodeAt(i);
            }
            return $scope.total;
        };
    });
})();