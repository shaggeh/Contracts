var Contracts;
(function (Contracts) {
    var Core;
    (function (Core) {
        var Services;
        (function (Services) {
            "use strict";
            var DataService = (function () {
                function DataService($http) {
                    this.$http = $http;
                    this.baseUrl = "/api/";
                }
                DataService.prototype.getContracts = function () {
                    return this.$http.get(this.baseUrl + "ContractsApi/");
                };
                DataService.prototype.calculateSalary = function (typeId, exp) {
                    return this.$http.get(this.baseUrl + "salaryCalculate/" + typeId + "/" + exp);
                };
                return DataService;
            }());
            Services.DataService = DataService;
        })(Services = Core.Services || (Core.Services = {}));
    })(Core = Contracts.Core || (Contracts.Core = {}));
})(Contracts || (Contracts = {}));
