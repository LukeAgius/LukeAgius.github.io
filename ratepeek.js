(function(){ 
	
	var app = angular.module("ratepeek", ["ngRoute"]);

	// ========================== Constants =============================

	app.constant('ExchangeServiceDetails',{
		url 				: "https://api.at.govt.nz/v1/gtfs/",
		apiKey 				: "?api_key=3657bf8e-3565-4ea3-91be-33c243b9b970",
		agencyInformation 	: "agency/"
	});

	// ========================== Routing ===============================
	app.config(function($routeProvider){
		$routeProvider
			.when('/main', {
				templateUrl	: 'Views/RouteSearch.html',
				controller 	: "RoutesController"
			}).
			when('/route/:routeID',{
				templateUrl : 'Views/RouteSearch.html',
				controller 	: "GeneralController"
			})
	});

	// ========================== Controller ===============================
	app.controller("GeneralController", ["$scope","ExchangeService",function($scope, ExchangeService){

		// Calls

	}]);
}());