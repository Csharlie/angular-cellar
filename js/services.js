//chainable service syntax
angular.module('cellar.services', ['ngResource']).
    factory('Wine', ['$resource', '$http',
        function($resource, $http) {
		  return $resource('api/wines/:wineId', {}, {
	        update: {method:'PUT'} //PUT must be defined explicitly
		  });

		}
	]);
