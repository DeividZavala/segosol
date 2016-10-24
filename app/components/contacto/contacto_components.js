(function () {

    var landing = {
        templateUrl:'/app/components/landing/landing.html',
        controller:landingController
    }
    	function landingController(){
    	}

    angular
        .module('segosol')
        .component('landingComponent',landing);
})();