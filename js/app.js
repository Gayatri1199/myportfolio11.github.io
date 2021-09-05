$(document).ready(function(){
	$(window).on('scroll',function(){
		var scroll=$(window).scrollTop();
		console.log(scroll);
		if(scroll>=30){
			$(".sticky").addClass("stickyadd");
		}else{
			$(".sticky").removeClass("stickyadd");
		}
	})

	var typed = new Typed(".element",{
		strings: ["Gayatri Purohit","a Developer","a Designer","a Dancer"],
		smartBackspace:true,
		typeSpeed:100,
		backSpeed:100,
		loop:true,
		loopCount:Infinity,
		startDelay:1000
	});

	// progress bars

	var waypoint = new Waypoint({
  element: document.getElementById('exp'),
  handler: function() {
    var p = document.querySelectorAll('.progress-bar');
p[0].setAttribute("style", "width:100%;transition:1s all");
p[1].setAttribute("style", "width:90%;transition:1.5s all");
p[2].setAttribute("style", "width:80%;transition:2s all");
p[3].setAttribute("style", "width:70%;transition:2.5s all");
  },
offset:'100%'
})




});

