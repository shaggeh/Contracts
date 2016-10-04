app.controller("viewController",
    ["$scope", "contractsService",
        function ($scope, contractsService) {
            getContracts();

            function getContracts() {
                contractsService.getContracts()
                    .then(function(response) {
                            $scope.gridOptions.data = response.data;
                        },
                        (e) => {
                            console.error(e);
                        });
            }

            $scope.gridOptions = {
                enableFiltering: true,
                paginationPageSize: 10,
                paginationPageSizes: [10, 20, 30],
                enablePaginationControls: true,
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                }
            };
        }
    ]);