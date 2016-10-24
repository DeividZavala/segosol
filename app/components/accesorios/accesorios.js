(function () {

	var accesorio={
		templateUrl:'app/components/accesorios/accesorios.html',
		controller:accesoriosController
	}
	
	function accesoriosController(){
		var accesorios = this;
		accesorios.arts = arts;
	}

	var arts = [
		{
            nombre:'Accesorio1',
            descripcion:'Hola yo soy panel solar 1',
            imagen:'http://www.fancyicons.com/free-icons/232/industry/png/256/solar_panel_256.png'
        },
        {
            nombre:'Accesorio2',
            descripcion:'Hola yo soy panel solar 1',
            imagen:'http://www.fancyicons.com/free-icons/232/industry/png/256/solar_panel_256.png'
        },
        {
            nombre:'Accesorio3',
            descripcion:'Hola yo soy panel solar 1',
            imagen:'http://www.fancyicons.com/free-icons/232/industry/png/256/solar_panel_256.png'
        },
	]



	angular
		.module('segosol')
		.component('accesoriosComponent', accesorio);
})();