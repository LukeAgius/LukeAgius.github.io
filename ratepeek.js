(function(){ 
	
	// Setting JsonRates API Key
	JR.apikey('jr-92758bdeda026d0f7fcc154b8ea0b86d');

	// Init Angular App
	var app = angular.module("ratepeek", ["ngRoute"]);

	// Angular Routing
	app.config(function($routeProvider){
		$routeProvider
			.when('/:fromCurrency/:toCurrency',{
				templateUrl : 'Views/RatePeeker.html',
				controller 	: "GeneralController"
			})
	});

	// Angular Controller
	app.controller("GeneralController", ["$scope","$routeParams","$http",
		function($scope,$routeParams,$http){

			// Getting fromCurrency as base					  
			$http.get("http://api.fixer.io/latest?base="+$routeParams.fromCurrency)
				.then(function(response){
					$scope.fromToRate = response.data.rates.NZD;	
					$scope.date = response.data.date;
				});


			// Getting toCurrency as base
			$http.get("http://api.fixer.io/latest?base="+$routeParams.toCurrency)
				.then(function(response){
					$scope.toFromRate = response.data.rates.EUR;		
				});

			// Passing selected currencies from URL
			$scope.from = $routeParams.fromCurrency;
			$scope.to = $routeParams.toCurrency;
		}]);
}());