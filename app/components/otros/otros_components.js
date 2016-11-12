(function () {

	var otros={
		templateUrl:'app/components/otros/otros.html',
		controller:otrosController
	}
	
	function otrosController(){
		var otros = this;
		otros.arts = arts;
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
		.component('otrosComponent', otros);
})();