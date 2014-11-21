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
    var $body = $('body');

    // query type list
    rest.get_all_topic_types(function (types) {
      $body.empty().append($('<h1>').text('DeepaMehta Topic Types'));
      var $ul = $body.append($('<ul>'));
      types.map(function (t) {
        $ul.append($('<li>').text(t.uri + t.value));
      });
    });
  });
});
