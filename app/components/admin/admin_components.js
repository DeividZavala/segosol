(function () {

    var admin = {
        templateUrl:'/app/components/admin/admin.html',
        controller:adminController
    }
    	function adminController(){
    		    $('.modal-trigger').leanModal();


    	}

    angular
        .module('segosol')
        .component('adminComponent',admin);
})();