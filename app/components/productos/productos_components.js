(function () {

    var producto = {
        templateUrl:'/app/components/productos/productos.html',
        controller:productosController
    }

    function productosController($firebaseArray,$scope,$location){
                   $scope.user = false;

          var ref = firebase.database().ref('productos');
           var list = $firebaseArray(ref);
    
              
              list.$loaded(
                function(x) {
                  $scope.productos = x;
                  console.log(x);
                }, function(error) {
                  console.error("Error:", error);
                });

}

    angular
        .module('segosol')
        .component('productosComponent',producto);
})();