/*jslint browser: true, indent: 2, maxlen: 120 */
/*global define, requirejs */

// configure dependency shortcuts
requirejs.config({
  paths: {
    text: 'lib/requirejs-text/text'
  }
});

// define index
define(['jQuery', 'dm4rest'], function ($, rest) {
  'use strict';

  // jQuery ready => start up
  $(function () {
    var $body = $('body'),
        sortByValue = function (a, b) { return a.value.localeCompare(b.value); };

    // query and display type list
    rest.get_all_topic_types(function (types) {
      $body.empty().append($('<h1>').text('DeepaMehta Topic Types'));
      var $ul = $body.append($('<ul>')),
        mapTypes = function (t) { $ul.append($('<li>').text(t.value + ' (' + t.uri + ')')); };
      types.sort(sortByValue).map(mapTypes);
    });
  });
});
