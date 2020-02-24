var angle = 0;

$(document).ready(function () {

  $('#side-toggle').on('click', function () {
      $('#sidebar').toggleClass('active');

      angle+=180;
    
    $('#side-toggle').css ({
        'transform': 'rotate(' + angle + 'deg)',
        '-webkit-transform': 'rotate(' + angle + 'deg)',
           '-moz-transform': 'rotate(' + angle + 'deg)',
             '-o-transform': 'rotate(' + angle + 'deg)',
            '-ms-transform': 'rotate(' + angle + 'deg)'
            //'margin-left': '+=245px'
        
  });



});
});


