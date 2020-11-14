(function($) {
  //deals with sliding nav off/on
  $(function() {
    var window_width = $(window).width();

    // convert rgb to hex value string
    function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) {
        return rgb;
      }

      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      if (rgb === null) {
        return 'N/A';
      }

      function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
      }

      return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

   
    // Pushpin Demo Init
    if ($('.pushpin-demo-nav').length) {
      $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
      });
    }



   
  }); // end of document ready
})(jQuery); // end of jQuery name space