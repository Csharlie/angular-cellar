function MenuCtrl($routeParams, $location, $scope) {

    $scope.addWine = function () {
        $location.path("/wines/add");
    };

}
MenuCtrl.$inject = ['$routeParams', '$location', '$scope'];


function WineListCtrl(Wine, updateService, $location, $scope) {
    $scope.wines = Wine.query(); 

    $scope.$on('handleBroadcast', function() {
        $scope.wines = Wine.query(); 
    });   

}
WineListCtrl.$inject = ['Wine', 'updateService', '$location', '$scope'];


function WineDetailCtrl(Wine, updateService, $routeParams, $location, $scope) {
    $scope.wine = Wine.get({wineId: $routeParams.wineId}) 

    $scope.saveWine = function () {
        if ($scope.wine.id > 0)
        {
            Wine.update({wineId:$scope.wine.id}, $scope.wine, function (res) {
                alert('Wine ' + $scope.wine.name + ' updated'); 
                updateService.broadcastItem();
                $location.path("/wines");
                }
            );
        }
        else
        {      
            Wine.save({}, $scope.wine, function (res) {
                alert('Wine ' + $scope.wine.name + ' created'); 
                updateService.broadcastItem();
                $location.path("/wines");
                }
            );
        }
    }

    $scope.deleteWine = function () {
        Wine.delete({wineId:$scope.wine.id}, function(wine) {
            alert('Wine ' + $scope.wine.name + ' deleted')
            updateService.broadcastItem();
            $location.path("/wines");
        });
    }
}
WineDetailCtrl.$inject = ['Wine', 'updateService', '$routeParams', '$location', '$scope'];