(function () {

    var landing = {
        templateUrl:'/app/components/landing/landing.html',
        controller:landingController
    }
    	function landingController(){
      			$('.parallax').parallax();

      			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        		$('.icon').mouseover(function(){
        			$(this).addClass('animated bounce ').one(animationEnd, function() {
            		$(this).removeClass('animated bounce ');
        			});
        		});
        		

    	}

    angular
        .module('segosol')
        .component('landingComponent',landing);
})();