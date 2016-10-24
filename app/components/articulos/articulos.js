(function(){


	var accesorio={
		templateUrl:'app/components/articulos/articulos.html',
		controlle:accesoriosController
	}


	angular
		.module('segosol')
		.component('accesoriosComponent', accesorio)
})();