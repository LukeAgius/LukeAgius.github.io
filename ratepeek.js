(function(){ 
	
	JR.apikey('jr-92758bdeda026d0f7fcc154b8ea0b86d');
	var app = angular.module("ratepeek", ["ngRoute"]);

	// ========================== Routing ===============================
	app.config(function($routeProvider){
		$routeProvider
			.when('/:fromCurrency/:toCurrency',{
				templateUrl : 'Views/RatePeeker.html',
				controller 	: "GeneralController"
			})
	});

	// ========================== Controller ===============================
	app.controller("GeneralController", ["$scope","$routeParams",
		function($scope,$routeParams){
			
			JR.from($routeParams.fromCurrency).to($routeParams.toCurrency).get(function(result) {
				document.getElementById("fromToRate").innerText = result.rate;
			});

			JR.from($routeParams.toCurrency).to($routeParams.fromCurrency).get(function(result) {
				document.getElementById("toFromRate").innerText = result.rate;
			});

			$scope.from = $routeParams.fromCurrency;
			$scope.to = $routeParams.toCurrency;
	}]);
}());