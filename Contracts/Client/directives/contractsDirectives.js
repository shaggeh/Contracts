var Contracts;
(function (Contracts) {
    var Core;
    (function (Core) {
        var Directives;
        (function (Directives) {
            var SelectBeautify = (function () {
                function SelectBeautify() {
                }
                SelectBeautify.prototype.link = function (scope, element) {
                    $(document).ready(function () {
                        var $select = $(element).find("select"), $selectButton = "<div class=\"hc-select-button cursor-pointer\"></div>", $selectWrapper = "<div class=\"hc-select-wrapper\"></div>", $selectOptionsWrapper = "<ul class=\"hc-select-options text-left\"></ul>", $pageWrapper = $("body");
                        $($select).wrap($selectWrapper).after($selectButton).after($selectOptionsWrapper);
                        $selectOptionsWrapper = $(element).find(".hc-select-options");
                        $selectWrapper = $(element).find(".hc-select-wrapper");
                        $selectButton = $(element).find(".hc-select-button");
                        $pageWrapper.off().on("click", function (e) {
                            if (e.target.classList[0] !== "hc-select-button") {
                                $(".hc-select-options").removeClass("active");
                            }
                        });
                        var $selectOptions = $($select).children();
                        for (var i = 0; i < $selectOptions.length; i++) {
                            $("<li />", {
                                text: $($select).children("option").eq(i).text(),
                                value: $($select).children("option").eq(i).val()
                            })
                                .appendTo($selectOptionsWrapper);
                        }
                        $($selectWrapper).append($selectOptionsWrapper);
                        $selectButton.on("click", function () {
                            if ($selectOptionsWrapper.hasClass("active")) {
                                $selectOptionsWrapper.removeClass("active");
                            }
                            else {
                                $selectOptionsWrapper.addClass("active");
                            }
                        });
                        $selectOptionsWrapper.on("click", "li", function () {
                            var $that = $(this);
                            if ($(element).children("option").eq($that.index("li")).attr("selected")) {
                                $selectOptionsWrapper.removeClass("active");
                            }
                            else {
                                $($select).val($that.attr("value"));
                                $selectOptionsWrapper.removeClass("active");
                            }
                            angular.element($select).triggerHandler('change');
                        });
                    });
                };
                SelectBeautify.Factory = function () {
                    var directive = function () { return new SelectBeautify(); };
                    directive["inject"] = [];
                    return directive;
                };
                return SelectBeautify;
            }());
            Directives.SelectBeautify = SelectBeautify;
        })(Directives = Core.Directives || (Core.Directives = {}));
    })(Core = Contracts.Core || (Contracts.Core = {}));
})(Contracts || (Contracts = {}));
//# sourceMappingURL=contractsDirectives.js.map