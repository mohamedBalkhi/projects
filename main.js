jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
        
      });
      var typed = new Typed('.text', { strings: ["<strong class=tog>Together</strong>", "<strong>For A better</strong>","<strong class='future';>Future!</strong>^1000"], typeSpeed:65,loop:true });
});
