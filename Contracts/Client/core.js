var Contracts;
(function (Contracts) {
    var Core;
    (function (Core) {
        "use strict";
        angular.module("contracts", ["ngAnimate", "ui.grid", "ui.grid.pagination"])
            .directive("selectBeautify", Core.Directives.SelectBeautify.Factory())
            .controller("createController", Core.Controllers.CreateController)
            .controller("pageController", Core.Controllers.PageController)
            .controller("viewController", Core.Controllers.ViewController)
            .service("dataService", Core.Services.DataService);
    })(Core = Contracts.Core || (Contracts.Core = {}));
})(Contracts || (Contracts = {}));
//# sourceMappingURL=core.js.map