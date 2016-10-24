(function(){


	var articulo={
		templateUrl:'app/components/articulos/articulos.html',
		controlle:articulosController
	}


	angular
		.module('segosol')
		.component('articulosComponent', articulo)
})();