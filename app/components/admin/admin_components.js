(function () {

    var admin = {
        templateUrl:'/app/components/admin/admin.html',
        controller:adminController
    }
    	function adminController($firebaseAuth,$firebaseArray,$scope,$location){
           //inicializamos variables
           $scope.user = false;
           var ref = firebase.database().ref('productos');
           var list = $firebaseArray(ref);
            //activa materialize
    		    $('.modal-trigger').leanModal();
                $('select').material_select();
            //Instanciamos auth de firebase
            $scope.authObj = $firebaseAuth();


            //detectamos si el usuario ya está logueado
            $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
              if (firebaseUser) {
                $scope.user = firebaseUser;
                console.log("hay usuario");
                $scope.traeProductos();
              } else {
                console.log("Signed out");
              }
            });

            //login
            $scope.logIn = function(){
                $scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.pass).then(function(firebaseUser) {
                  console.log("Signed in as:", firebaseUser.uid);
                  $scope.user = firebaseUser;
                }).catch(function(error) {
                  // $location.path('/');
                  console.error("Authentication failed:", error);
                });
            } //login

            $scope.logOut = function(){
                $scope.authObj.$signOut();
                console.log('sesion cerrada');
            } //logout

            $scope.traeProductos = function(){
              
              list.$loaded(
                function(x) {
                  $scope.productos = x;
                  console.log(x);
                }, function(error) {
                  console.error("Error:", error);
                });
            } // trae

            $scope.borrar = function(item){
    
              list.$remove(item)
              .then(function(ref) {
                console.log('borrado');
              });
            }


    	} //controller

    angular
        .module('segosol')
        .component('adminComponent',admin);
})();