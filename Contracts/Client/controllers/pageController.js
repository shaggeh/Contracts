var Contracts;
(function (Contracts) {
    var Core;
    (function (Core) {
        var Controllers;
        (function (Controllers) {
            var PageController = (function () {
                function PageController($scope, pageCtrl) {
                    this.$scope = $scope;
                    this.$scope.pageCtrl = this;
                    this.$scope.isCreating = false;
                }
                PageController.prototype.create = function () {
                    this.$scope.isCreating = true;
                };
                PageController.prototype.cancel = function () {
                    this.$scope.isCreating = false;
                };
                PageController.$inject = ["$scope"];
                return PageController;
            }());
            Controllers.PageController = PageController;
        })(Controllers = Core.Controllers || (Core.Controllers = {}));
    })(Core = Contracts.Core || (Contracts.Core = {}));
})(Contracts || (Contracts = {}));
