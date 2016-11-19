(function () {

	var otros={
		templateUrl:'app/components/otros/otros.html',
		controller:otrosController
	}
	
	function otrosController(){
		 $('.carousel').carousel();

	}

	


	angular
		.module('segosol')
		.component('otrosComponent', otros);
})();