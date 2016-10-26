(function () {

    var contacto = {
        templateUrl:'/app/components/contacto/contacto.html',
        controller:contactoController
    }
    	function contactoController(){
    		$('select').material_select();

    	}

    angular
        .module('segosol')
        .component('contactoComponent',contacto);
})();