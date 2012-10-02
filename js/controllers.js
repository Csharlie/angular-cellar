function MenuCtrl($routeParams, $location, $scope) {

    $scope.addWine = function () {
        $location.path("/wines/add");
    };

}
MenuCtrl.$inject = ['$routeParams', '$location', '$scope'];


function WineListCtrl(Wine, $location, $scope) {
    $scope.wines = Wine.query(); 
}
WineListCtrl.$inject = ['Wine', '$location', '$scope'];


function WineDetailCtrl(Wine, $routeParams, $location, $scope) {
    $scope.wine = Wine.get({wineId: $routeParams.wineId}) 

    $scope.saveWine = function () {
        if ($scope.wine.id > 0)
        {
            Wine.update({wineId:$scope.wine.id}, $scope.wine, function (res) {
                alert('Wine ' + $scope.wine.name + ' updated'); 
                $location.path("/wines");
                }
            );
        }
        //If the request didn't return a match, it is a new wine
        else
        {      
            Wine.save({}, $scope.wine, function (res) {
                alert('Wine ' + $scope.wine.name + ' created'); 
                $location.path("/wines");
                }
            );
        }
    }

    $scope.deleteWine = function () {
        Wine.delete({wineId:$scope.wine.id}, function(wine) {
            alert('Wine ' + $scope.wine.name + ' deleted')
            $location.path("/wines");
        });
    }
}
WineDetailCtrl.$inject = ['Wine', '$routeParams', '$location', '$scope'];