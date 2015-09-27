
angular.module('survify')

.controller('LoginCtrl', function($scope, $location, APIService) {

	// Define Init Method
	var init = function(){
		initScope();
	}

	// Init Scope Data
	var initScope = function(){
		// params
		$scope.loginData = {};

		// methods
		$scope.onLoginClick = onLoginClick;
	}

	// Login Click Listener
	var onLoginClick = function(){
		console.log($scope.loginData);

		APIService.login($scope.loginData);
	}

	// Call Init Method
	init();
});
