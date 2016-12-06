module Contracts.Core.Controllers {
    "use strict";

    import dataService = Services.DataService;

    export interface ICreateScope extends ng.IScope {
        createCtrl: ICreateController;
        calculatedSalary: number;
        experienceField: number;
        positionField: number;
    }

    export interface ICreateController {
        getSalary(typeId: number, exp: number): any;
        salaryTrigger(form): void;
    }

    export class CreateController implements ICreateController {
        static $inject = ["$scope", "dataService"];

        public $scope: ICreateScope;
        public dataService: dataService;

        constructor($scope: ICreateScope, dataService: dataService) {
            this.$scope = $scope;
            this.dataService = dataService;
            this.$scope.createCtrl = this;
        }

        getSalary(positionField, experienceField): void {
            this.dataService.calculateSalary(positionField, experienceField)
                .then(response => {
                    this.$scope.calculatedSalary = response.data;
                });
        }

        salaryTrigger(form): void {
            if (form.Experience.$modelValue !== undefined && form.Type.$modelValue !== undefined) {
                this.getSalary(this.$scope.positionField, this.$scope.experienceField);
            }
        }
    }
}