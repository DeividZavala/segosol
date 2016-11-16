(function () {

    var producto = {
        templateUrl:'/app/components/productos/productos.html',
        controller:productosController
    }

    function productosController($firebaseArray,$scope,$location,$routeParams){
                   $scope.user = false;

                    console.log($routeParams.category)

            $scope.recargar = function (){
              $location.path("/productos/0")
            }

            if($routeParams.category == "0"){

              var ref = firebase.database().ref('productos');
              var list = $firebaseArray(ref);
        
                  
                  list.$loaded(
                    function(x) {
                      $scope.productos = x;
                      console.log(x);
                    }, function(error) {
                      console.error("Error:", error);
                    });
            }else{

              $scope.categorias = {
                  "1":"Energía Solar",
                  "2":"Paneles Solares",
                  "3":"Iluminación Led",
                  "4":"Enegía eólica",
                  "5":"Cercas eléctricas solares",
                  "6":"Cámara de vigilancia",
                  "7":"Calentadores Solares",
                  "8":"Accesorios"
              }
                $scope.categoria_producto = $scope.categorias[$routeParams.category]
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

          

}

    angular
        .module('segosol')
        .component('productosComponent',producto);
})();