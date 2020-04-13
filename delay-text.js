jQuery = typeof jQuery === 'undefined' ? $ : jQuery;

jQuery.fn.delayText = function(options) {
  options = typeof options === 'undefined' ? {} : options;

  jQuery(this).get().forEach(
    function(element) {
      var text = element.innerText;
      var textLength = text.length;

      element.innerHTML = '';

      for (var i = 0; i < textLength; i++) {
        var span = document.createElement('span');
        span.innerText = text.charAt(i);

        jQuery(span).css('opacity', '0');

        element.append(span);

        options.time = typeof options.time === 'undefined' ? 1000 : options.time;
        options.sequential = typeof options.sequential === 'undefined' ? false : options.sequential;

        var wait;
        if (options.sequential) {
          wait = i / textLength * options.time;
        } else {
          wait = Math.random() * options.time;
        }

        setTimeout(
          function(i, element) {
            jQuery(element.children[i]).css('opacity', '1');
          },
          wait,
          i,
          element
        );
      }
    }
  );
};
