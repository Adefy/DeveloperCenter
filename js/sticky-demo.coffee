updateOffset = ->
  parentOffset = $(".sticky-demo").parent().offset()
  parentWidth = $(".sticky-demo").parent().width()

  $(".sticky-demo").offset
    top: parentOffset.top + $(window).scrollTop()
    left: parentOffset.left + parentWidth - $(".sticky-demo").width()

$(document).ready ->
  updateOffset()

  $(window).resize updateOffset
