(function(){ 
	
	// Setting JsonRates API Key
	JR.apikey('jr-92758bdeda026d0f7fcc154b8ea0b86d');

	// Init Angular App
	var app = angular.module("ratepeek", ["ngRoute"]);

	// Angular Routing
	app.config(function($routeProvider){
		$routeProvider
			.when('/:fromCurrency/:toCurrency/:amount',{
				templateUrl : 'Views/RatePeeker.html',
				controller 	: "GeneralController"
			})
	});

	// Angular Controller
	app.controller("GeneralController", ["$scope","$routeParams",
		function($scope,$routeParams){
			
			// Converting from first currency to second currency in the url 
			JR.from($routeParams.fromCurrency).to($routeParams.toCurrency).get(function(result) {
				document.getElementById("fromToRate").innerText = result.rate;
			});

			// Converting from second currency to first currency in the url 
			JR.from($routeParams.toCurrency).to($routeParams.fromCurrency).get(function(result) {
				document.getElementById("toFromRate").innerText = result.rate;
			});

			// Passing selected currencies from URL
			$scope.from = $routeParams.fromCurrency;
			$scope.to = $routeParams.toCurrency;
	}]);
}());