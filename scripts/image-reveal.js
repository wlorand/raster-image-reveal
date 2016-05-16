/**********************
 file: image-reveal.js
 *********************/

(function(){	
    'use strict'; 

    function doReveal(evt){
        // dynamically set the clip rectangle based on the mouse coords 
        var clipRight = evt.clientX-evt.target.offsetLeft;
   	    evt.target.previousElementSibling.style.clip = 'rect(0, ' + clipRight + 'px, 551px, 0)';
    }
  
    // register event
    document.querySelector('.reveal__activator').addEventListener('mousemove', doReveal);
})();
