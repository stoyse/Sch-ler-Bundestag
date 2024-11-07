$(window).on('scroll', function(){
  function isScrollIntoView(elem, index) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(window).height()*.5;
    if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
      $(elem).addClass('active');
    }
    if(!(elemBottom <= docViewBottom)) {
      $(elem).removeClass('active');
    }
    var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
    var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
    $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
  }
  var timeline = $('#vertical-scrollable-timeline li');
  Array.from(timeline).forEach(isScrollIntoView);
});