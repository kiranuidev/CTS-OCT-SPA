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
                $StateProvider.state("cart", cartObj);

                     }])
    }
)();
