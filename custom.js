$(document).ready(() => {
	initWebsite();
	refreshWebsite();
})
$(window).resize(() => {
	refreshWebsite();
});
function initWebsite() {
  console.log('Welcome to Softwerkstatt! :)');
}

var aspectRatio = -1;
var borderWidth = 1920;
var borderheight = 600;

function refreshWebsite() {
  var newAspectRatio = $(window).width() / $(window).height();
  if(aspectRatio != newAspectRatio) {
    aspectRatio = newAspectRatio;
    var wantAspectRatio = borderWidth / borderheight;
    var wantHeight = $(window).width() / wantAspectRatio;
    $('.border').css('height', wantHeight + 'px');
    $('.border-container:not(footer) .container').css('padding', wantHeight / 2 + 'px 0');
    $('footer.border-container .container').css('padding-top', wantHeight / 3 + 'px');
  }
}