module Contracts.Core.Controllers {
    export interface IPageScope extends ng.IScope {
        isCreating: boolean;
        pageCtrl: IPageController;
    }

    export interface IPageController extends ng.IController {
        create(): void;
        cancel(): void;
    }

    export class PageController implements IPageController {
        static $inject = ["$scope"];

        public $scope: IPageScope;
        public pageCtrl: IPageController;

        constructor($scope: IPageScope, pageCtrl: IPageController) {
            this.$scope = $scope;
            this.$scope.pageCtrl = this;
            this.$scope.isCreating = false;
        }

        create(): void {
            this.$scope.isCreating = true;
        }

        cancel(): void {
            this.$scope.isCreating = false;
        }
    }
}