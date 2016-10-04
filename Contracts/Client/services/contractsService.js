app.service("contractsService",
[
    "$http", function($http) {
        var baseUrl = "/api/ContractsApi";

        this.getContracts = () => {
            return $http.get(baseUrl);
        }
    }
]);