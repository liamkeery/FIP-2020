var angle = 0; //rotate the toggle when clicked

$(document).ready(function () {

  $('#side-toggle').on('click', function () {
    $('#sidebar, #content').toggleClass('active');

      angle+=180; 
    
      //rotate the toggle when clicked
    $('#side-toggle').css ({
        'transform': 'rotate(' + angle + 'deg)',
        '-webkit-transform': 'rotate(' + angle + 'deg)',
           '-moz-transform': 'rotate(' + angle + 'deg)',
             '-o-transform': 'rotate(' + angle + 'deg)',
            '-ms-transform': 'rotate(' + angle + 'deg)'
            //'margin-left': '+=245px' move the arrow toggle when clicked
        
    });
  });
});


