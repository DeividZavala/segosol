(function () {
    angular
        .module('segosol')
        .config(routes);

        function routes($routeProvider) {
            $routeProvider
                .when('/',{
                    template:`<landing-component></landing-component>`
                })
                .when('/catalogo',{
                    template:`<h1>Catalogo</h1>`
                })
        }

})();