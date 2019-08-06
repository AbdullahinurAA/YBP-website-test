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


$(document).ready(function () {
  $('#company1').on('click', function () {
      $('.company1').toggleClass('companyOne');
      $(this).toggleClass('companyOne');
  });
})