var Contracts;
(function (Contracts) {
    var Core;
    (function (Core) {
        var Controllers;
        (function (Controllers) {
            "use strict";
            var CreateController = (function () {
                function CreateController($scope, dataService) {
                    this.$scope = $scope;
                    this.dataService = dataService;
                    this.$scope.createCtrl = this;
                }
                CreateController.prototype.getSalary = function (positionField, experienceField) {
                    var _this = this;
                    this.dataService.calculateSalary(positionField, experienceField)
                        .then(function (response) {
                        _this.$scope.calculatedSalary = response.data;
                    });
                };
                CreateController.prototype.salaryTrigger = function (form) {
                    if (form.Experience.$modelValue !== undefined && form.Type.$modelValue !== undefined) {
                        this.getSalary(this.$scope.positionField, this.$scope.experienceField);
                    }
                };
                CreateController.$inject = ["$scope", "dataService"];
                return CreateController;
            }());
            Controllers.CreateController = CreateController;
        })(Controllers = Core.Controllers || (Core.Controllers = {}));
    })(Core = Contracts.Core || (Contracts.Core = {}));
})(Contracts || (Contracts = {}));
//# sourceMappingURL=createController.js.map