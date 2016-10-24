(function () {
    angular
        .module('segosol')
        .config(routes);

        function routes($routeProvider) {
            $routeProvider
                .when('/',{
                    template:`<landing-component></landing-component>`
                })
                .when('/productos',{
                    template:`<productos-component></productos-component>`
                })
                .when('/contacto',{
                     template: ('/contacto-component></contacto-component')
                })
                .when('/accesorios',{
                template: ('/accesorios-component></accesorios-component')
                })

                .otherwhise({redirectTo:'/'})
        }

})();