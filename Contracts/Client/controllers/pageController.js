app.controller("pageController",
[
    "$scope", function($scope) {
        $scope.isCreating = false;

        $scope.create = () => {
            $scope.isCreating = true;
        };

        $scope.cancel = () => {
            $scope.isCreating = false;
        };
    }
]);