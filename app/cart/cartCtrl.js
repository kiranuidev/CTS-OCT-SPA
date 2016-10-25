(function () {
    angular.module("ctsApp")
        .controller("cartCtrl", ["$scope", "$state",
                                    function ($scope, $state) {

                $scope.viewName = "Cart";
                console.log($state.params);
                $scope.products = $state.params.data;
}]);
})
();
