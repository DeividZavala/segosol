(function(){
	var administrador = {
		templateUrl:'app/components/admin/admin.html',
		controller: adminController
	}

	function adminController(){

	}

	angular
		.module('segosol')
		.component('adminCompnent', administrador)
})();