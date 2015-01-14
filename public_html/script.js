/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
      $(".practice").css("background-color", "red");
      $('.yeah').css('color', "red");
      $('#oneButton').bind('click',alertButtonClick);
      //$('body').css('background-image', '');
      $('.yeah').css('background-image', 'url(http://media.tumblr.com/dfffa15629e2f76ae4e9614661d76538/tumblr_inline_mwyd8mh9L41qa2sc1.gif)');

});

function alertButtonClick() {
    alert("There was a button clicked");
    
    
}

$('document').ready(function() {
    $('.yeah').css('background-color', 'red');


    $('#replaceWText').bind('click', replaceWText);

    $('#randPara').bind('click', addPara);

    $('#removePara').bind('click', removeAPara);

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


















