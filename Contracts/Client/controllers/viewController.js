var Contracts;
(function (Contracts) {
    var Core;
    (function (Core) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var ViewController = (function () {
                function ViewController($scope, dataService) {
                    this.$scope = $scope;
                    this.dataService = dataService;
                    this.$scope.viewCtrl = this;
                    this.setGridOptions();
                    this.getContracts();
                }
                ViewController.prototype.getContracts = function () {
                    var _this = this;
                    this.dataService.getContracts()
                        .then(function (response) {
                        _this.$scope.gridOptions.data = response.data;
                    }, function (e) { console.error(e); });
                };
                ViewController.prototype.gridFilter = function (type) {
                    for (var i = 0; i < this.$scope.gridApi.grid.columns.length; i++) {
                        if (type === 0) {
                            if (this.$scope.gridApi.grid.columns[i].field === "Salary") {
                                var arr = this.$scope.gridApi.grid.columns[i].filters[0].term = 5000;
                            }
                        }
                        else if (type === 1) {
                            if (this.$scope.gridApi.grid.columns[i].field === "Experience") {
                                var arr = this.$scope.gridApi.grid.columns[i].filters[0].term = 5;
                            }
                        }
                    }
                };
                ;
                ViewController.prototype.setGridOptions = function () {
                    var that = this;
                    this.$scope.gridOptions = {
                        enableFiltering: true,
                        paginationPageSize: 10,
                        columnDefs: [
                            { field: "Name" },
                            { field: "Type" },
                            { field: "Experience" },
                            {
                                field: "Salary", filters: [{
                                        condition: function (term, value) {
                                            return parseFloat(value) > parseFloat(term);
                                        }
                                    }]
                            }
                        ],
                        paginationPageSizes: [10, 20, 30],
                        enablePaginationControls: true,
                        onRegisterApi: function (gridApi) {
                            that.$scope.gridApi = gridApi;
                        }
                    };
                };
                ViewController.$inject = ["$scope", "dataService"];
                return ViewController;
            }());
            Controllers.ViewController = ViewController;
        })(Controllers = Core.Controllers || (Core.Controllers = {}));
    })(Core = Contracts.Core || (Contracts.Core = {}));
})(Contracts || (Contracts = {}));
//# sourceMappingURL=viewController.js.map