module Contracts.Core {
    "use strict";

    angular.module("contracts", ["ngAnimate", "ui.grid", "ui.grid.pagination"])
        .directive("selectBeautify", Directives.SelectBeautify.Factory())
        .controller("createController", Controllers.CreateController)
        .controller("pageController", Controllers.PageController)
        .controller("viewController", Controllers.ViewController)
        .service("dataService", Services.DataService);
}