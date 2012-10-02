angular.module('cellar.services', ['ngResource']).
    factory('Wine', ['$resource', '$http',
        function($resource, $http) {
		  return $resource('api/wines/:wineId', {}, {
	        update: {method:'PUT'}
		  });

		}
	]).
	factory('updateService', function($rootScope) {
	    var sharedService = {};

	    sharedService.broadcastItem = function() {
	        $rootScope.$broadcast('handleBroadcast');
	    };

	    return sharedService;
	});
