$(document).ready(() => {
	initWebsite();
	refreshWebsite();
})
$(window).resize(() => {
	refreshWebsite();
});

function initWebsite() {
  console.log('Welcome to Softwerkstatt! :)');
  addTabsEvents();
}

function refreshWebsite() {
  const borderWidth = 1920;
  const borderHeight = 600;
  const wantAspectRatio = borderWidth / borderHeight;
  var wantHeight = $(window).width() / wantAspectRatio;
  $('.border').css('height', wantHeight + 'px');
  $('.border-container:not(footer) .container').css('padding', wantHeight / 2 + 'px 0');
  $('footer.border-container .container').css('padding-top', wantHeight / 3 + 'px');
}

function addTabsEvents() {
  $('#tab_navi li').on('click', (e) => {
    var index = $(e.target).index();
    changeActive('#tab-navi', index)
    changeActive('#tab-content', index)
    changeActive('#tab-thumb', index)
  });

  function changeActive(selector, index) {
    $(`${selector} li.active`).removeClass('active');
    $(`${selector} li:nth-child(${index + 1})`).addClass('active');
  }
}