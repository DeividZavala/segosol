(function () {

    var contacto = {
        templateUrl:'/app/components/contacto/contacto.html',
        controller:contactoController
    }
    	function contactoController(){
    	}

    angular
        .module('segosol')
        .component('contactoComponent',contacto);
})();