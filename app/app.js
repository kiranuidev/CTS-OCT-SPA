(
    function () {
        angular.module("ctsApp", ["ui.router"]);

        angular.module("ctsApp")
            .config(["$stateProvider", "$urlRouterProvider", function ($StateProvider, $urlRouterProvider) {
                //define states
                var homeObj = {
                    name: "home",
                    templateUrl: 'app/home/home.html',
                    url: 'home'
                };
                var prodcutObj = {
                    name: "product",
                    templateUrl: 'app/products/products.html',
                    controller: "productCtrl",
                    url: "products"
                };

                var productDetail = {
                    name: "product.detail",
                    templateUrl: 'app/products/products.detail.html',
                    parent: "product"

                };
                var cartObj = {
                    name: "cart",
                    templateUrl: 'app/products/products.html',
                    controller: "cartCtrl",
                    url: 'cart',
                    params: {
                        data: ""
                    }
                };

                //registering the state.
                $StateProvider.state("home", homeObj);
                $StateProvider.state("product", prodcutObj);
                $StateProvider.state("product.detail", productDetail);
                $StateProvider.state("cart", cartObj);

                     }])
            .run(["$rootScope", function ($rootScope) {

                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

                });
            }]);

    })();
