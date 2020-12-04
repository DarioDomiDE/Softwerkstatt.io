$(document).ready(() => {
  console.log('Welcome to Softwerkstatt! :)');
  var res = $('.bottom').width();
  $('.bottom').css({
      'height': res / 1080 * 600  + 'px'
  });
})