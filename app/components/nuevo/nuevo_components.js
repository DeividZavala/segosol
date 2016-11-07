(function () {

    var nuevo = {
        templateUrl:'/app/components/nuevo/nuevo.html',
        controller:nuevoController
    }
        function nuevoController(){
                $('.modal-trigger').leanModal();
                $('select').material_select();


        }

    angular
        .module('segosol')
        .component('nuevoComponent',nuevo);
})();