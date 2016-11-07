(function () {

    var nuevo = {
        templateUrl:'/app/components/nuevo/nuevo.html',
        controller:nuevoController
    }
        function nuevoController($scope,$firebaseAuth,$firebaseArray){
               //inicializamos variables
               $scope.user = null;
               $scope.nuevoP = {};
               var ref = firebase.database().ref('productos');
                // Create a root reference
                var storageRef = firebase.storage().ref();

               //Instanciamos auth de firebase
                $scope.authObj = $firebaseAuth();

                //activamos materialize
                $('.modal-trigger').leanModal();
                $('select').material_select();


                //detectamos si el usuario ya está logueado
                $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
                  if (firebaseUser) {
                    $scope.user = firebaseUser;
                    console.log("hay usuario");
                  } else {
                    console.log("Signed out");
                  }
                });

                $scope.agregar = function(){
                    var list = $firebaseArray(ref);
                    list.$add($scope.nuevoP)
                    .then(function(ref) {
                        console.log('guardado');
                        Materialize.toast('Guardado con éxito!', 4000);
                        $scope.nuevoP = {};
                        $('#preview').hide();
                        $('#nombre').val("");
                    })
                    .catch(function(){
                        console.log('error, no guardo')
                    });
                } //agregar

                $scope.subirArchivo = function(){
                  $('#loader').show();
                  var file = $('input[type=file]')[0].files[0];
                  var uploadTask = storageRef.child('images/' + file.name).put(file)
                  .then(function(r){
                    $scope.nuevoP.img = r.downloadURL;
                    console.log(r.downloadURL);
                    $('#preview').show();
                    $('#preview').attr('src',r.downloadURL);
                    $('#loader').hide();
                  });

                }




        }

    angular
        .module('segosol')
        .component('nuevoComponent',nuevo);
})();