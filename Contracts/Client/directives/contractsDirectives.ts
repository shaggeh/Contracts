module Contracts.Core.Directives {
    export class SelectBeautify implements ng.IDirective {
        restrict: "A";

        scope: {};

        public link(scope: ng.IScope, element: JQuery) {
            $(document).ready(function () {
                var $select: JQuery = $(element).find("select"),
                    $selectButton: any = "<div class=\"hc-select-button cursor-pointer\"></div>",
                    $selectWrapper: any = "<div class=\"hc-select-wrapper\"></div>",
                    $selectOptionsWrapper: any = "<ul class=\"hc-select-options text-left\"></ul>",
                    $pageWrapper: JQuery = $("body");

                $($select).wrap($selectWrapper).after($selectButton).after($selectOptionsWrapper);

                $selectOptionsWrapper = $(element).find(".hc-select-options");
                $selectWrapper = $(element).find(".hc-select-wrapper");
                $selectButton = $(element).find(".hc-select-button");

                $pageWrapper.off().on("click", e => {
                    if (e.target.classList[0] !== "hc-select-button") {
                        $(".hc-select-options").removeClass("active");
                    }
                });

                var $selectOptions = $($select).children();

                for (var i = 0; i < $selectOptions.length; i++) {
                    $("<li />",
                        {
                            text: $($select).children("option").eq(i).text(),
                            value: $($select).children("option").eq(i).val()
                        })
                        .appendTo($selectOptionsWrapper);
                }

                $($selectWrapper).append($selectOptionsWrapper);

                $selectButton.on("click", () => {
                    if ($selectOptionsWrapper.hasClass("active")) {
                        $selectOptionsWrapper.removeClass("active");
                    } else {
                        $selectOptionsWrapper.addClass("active");
                    }
                });

                $selectOptionsWrapper.on("click", "li", function () {
                    var $that = $(this);

                    if ($(element).children("option").eq($that.index("li")).attr("selected")) {
                        $selectOptionsWrapper.removeClass("active");
                    } else {
                        $($select).val($that.attr("value"));
                        $selectOptionsWrapper.removeClass("active");
                    }

                    angular.element($select).triggerHandler('change');
                });
            });
        }
        
        public static Factory() {
            var directive = () => new SelectBeautify();
            directive["inject"] = [];
            return directive;
        }
    }
}