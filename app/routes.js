(function () {
    angular
        .module('segosol')
        .config(routes)
        .run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/admin");
    }
  });
}])
    .factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);

        function routes($routeProvider) {
            $routeProvider
                .when('/',{
                    template:`<landing-component></landing-component>`
                })
                .when('/productos',{
                    template:`<productos-component></productos-component>`
                })
                .when('/contacto',{
                     template: `<contacto-component></contacto-component>`
                })
                .when('/accesorios',{
                     template: `<accesorios-component></accesorios-component>`
                })
                .when('/admin',{
                    template: `<admin-component></admin-component>`
                })
                .when('/admin/nuevo',{
                    template: `<nuevo-component></nuevo-component>`,
                    resolve: {
                      // controller will not be loaded until $requireSignIn resolves
                      // Auth refers to our $firebaseAuth wrapper in the factory below
                      "currentAuth": ["Auth", function(Auth) {
                        // $requireSignIn returns a promise so the resolve waits for it to complete
                        // If the promise is rejected, it will throw a $stateChangeError (see above)
                        return Auth.$requireSignIn();
                      }]
                    }
                })
                
        }

})();