(function(){ 
	
	var app = angular.module("ratepeek", ["ngRoute"]);

	// ========================== Constants =============================

	app.constant('ExchangeServiceDetails',{
		url 				: "http://www.jsonrates.com/get/?from=NZD&to=EUR&apiKey=jr-92758bdeda026d0f7fcc154b8ea0b86d"
	});

	// ========================== Routing ===============================
	app.config(function($routeProvider){
		$routeProvider
			.when('/:fromCurrency/:toCurrency',{
				templateUrl : 'Views/RatePeeker.html',
				controller 	: "GeneralController"
			})
	});

	// ========================== Controller ===============================
	app.controller("GeneralController", ["$scope","ExchangeService","$routeParams",
		function($scope, ExchangeService,$routeParams){

		$scope.from = $routeParams.fromCurrency;
		$scope.to = $routeParams.toCurrency;
		$scope.RateInfo = ExchangeService.getRate();
		// Call Service
	}]);


	// ========================== Service ===============================
	app.factory("ExchangeService", function($http, ExchangeServiceDetails){

		// Get Agency Information from AT
		var getRate = function(){
			return $http.get("http://www.jsonrates.com/get/?from=NZD&to=EUR&apiKey=jr-92758bdeda026d0f7fcc154b8ea0b86d")
				.then(function(response){
					return response.data;
				});
		};

		// Exposing functions
		return {
			getRate: getRate
		};
	});
}());