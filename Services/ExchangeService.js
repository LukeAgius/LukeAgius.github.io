(function(){

	var ExchangeService = function($http, ExchangeServiceDetails){

		// Builds the URL according the chosen URI and value if any
		var getURL = function(uri,value){
			return ATServiceDetails.url+uri+value+ATServiceDetails.apiKey;
		}

		// General call API function
		var callAPI = function(uri, value){
			return $http.get(getURL(uri,value))
				.then(function(response){
					return response.data;
				});
		}

		// Get Agency Information from AT
		var getAgency = function(){
			return callAPI(ATServiceDetails.agencyInformation,'');	
		};

		// Exposing functions
		return {
			getAgency: getAgency
		};
	};

	// Inject service into ng-app
	var module = angular.module("atlookout");	
	module.factory("ExchangeService", ExchangeService);
}());