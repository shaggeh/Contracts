module Contracts.Core.Controllers {
    "use strict";

    import dataService = Services.DataService;

    export interface IViewScope extends ng.IScope {
        viewCtrl: IViewController;
        dataService: dataService;
        gridApi: any;
        gridOptions: any;
        numbers: any;
    }

    export interface IViewController {
        getContracts(): void;
        setGridOptions(): void;
    }

    export class ViewController implements IViewController {
        static $inject = ["$scope", "dataService"];

        public $scope: IViewScope;
        public dataService: dataService;

        constructor($scope: IViewScope, dataService: dataService) {
            this.$scope = $scope;
            this.dataService = dataService;
            this.setGridOptions();
            this.getContracts();
        }

        getContracts(): void {
            this.dataService.getContracts()
                .then(response => {
                        this.$scope.gridOptions.data = response.data;
                    },
                (e) => { console.error(e); });
        }

        salaryFilter(): void {
            for (var i = 0; i < this.$scope.gridApi.grid.columns.length; i++) {
                if (this.$scope.gridApi.grid.columns[i].field === "Salary") {
                    var arr = this.$scope.gridApi.grid.columns[i].filters[0].term = 5000;
                }
            }
        };

        setGridOptions(): void {
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
                            condition(term, value) {
                                return parseFloat(value) > parseFloat(term);
                            }
                        }]
                    }
                ],
                paginationPageSizes: [10, 20, 30],
                enablePaginationControls: true,
                onRegisterApi(gridApi) {
                    that.$scope.gridApi = gridApi;
                }
            };
        }
    }
}