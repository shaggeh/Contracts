module Contracts.Core.Services {
    "use strict";

    export class DataService {
        private $http: ng.IHttpService;
        private baseUrl: string;

        constructor($http: ng.IHttpService) {
            this.$http = $http;
            this.baseUrl = "/api/";
        }

        getContracts(): any {
            return this.$http.get(this.baseUrl + "ContractsApi/");
        }

        calculateSalary(typeId: number, exp: number): any {
            return this.$http.get(this.baseUrl + "salaryCalculate/" + typeId + "/" + exp);
        }
    }
}