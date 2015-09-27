
angular.module('survify')

.factory('APIService', function($http) {

	var SERVER = "http://survify.dev/api";

	// Public Methods

	var login = function(params, success, error){
		var promise = $http.post(SERVER+"/login", params);

		handleResponse(promise, success, error);
	}

	// Private Methods

	var handleResponse = function(promise, success, error){
		promise
		.success(function(response){
			if (angular.isFunction(success)) {
				success(response);
			}
		})
		.error(function(response){
			if (angular.isFunction(error)) {
				error(response);
			}
		});
	}

	// Expose API Public Methods

	return {
		login: login,
	};
});
