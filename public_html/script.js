/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
      $(".practice").css("background-color", "black");
      $('.yeah').css('color', "white");
      $('#oneButton').bind('click',alertButtonClick);
      //$('body').css('background-image', '');
      $('.yeah').css('background-image', 'url(https://31.media.tumblr.com/04eade104c0ea8bb29069a1d16594faf/tumblr_inline_ncriy1MOOX1s7wopc.gif)');

});

function alertButtonClick() {
    alert("There was a button clicked");
    
    
}

$('document').ready(function() {
    $('.yeah').css('background-color', 'white');


    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addPara);

    $('#removePara').bind('click', removeAPara);

    $('#hide').bind('click', hideThePage);
    
    $('#show').bind('click', showThePage);
   
    $('#show').bind('click', 'hidden');
});


function removeAPara() {
    $('#randPara p:last').remove();
}


function addPara() {
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText() {
    $('#replaceWText').text('Replaced!');
}


function hideThePage(){
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}


function showThePage(){
    $('diiv').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}












$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(resizeBg).trigger("resize");

});


// Slightly modified from video version.
$(document).ready(function() {
    // Create an audio element, and set it to autoplay, 
   // and show the player when the page loads.
    var audio = $('<audio />', {
      autoPlay : 'autoplay',
      controls : 'controls'
    });
     
    // Call our addSource function, and pass in the audio element
    // and the path(s) to your audio.
    addSource(audio, 'audioFile.ogg');
    addSource(audio, 'audioFile.mp3');
   
    // When some event is fired...
    $('a').click(function() {
     // Add the audio + source elements to the page.
      audio.appendTo('body');  
      // Fadeout the anchor tag to keep the user from clicking it again.
      $(this).fadeOut('slow');
      return false;
    });
     
   // Adds a source element, and appends it to the audio element, represented 
   // by elem.
    function addSource(elem, path) {
      $('<source />').attr('src', path).appendTo(elem);
    }
    
});



























