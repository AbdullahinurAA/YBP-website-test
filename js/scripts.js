// Funtion to control carousel interval

$('.carousel').carousel({
  interval: 2500
})

//**************************** */

// Function to control sidebar

$(document).ready(function() {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  })
})
// **************************** */
