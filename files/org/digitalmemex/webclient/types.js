/*jslint browser: true, indent: 2, maxlen: 120 */
/*global define */

// query and display type list
define(['jQuery', 'dm4rest'], function ($, rest) {
  'use strict';

  var sortByValue = function (a, b) { return a.value.localeCompare(b.value); };

  return {
    load: function ($parent) {
      var $section = $('<section>'),
          $title = $('<h1>').text('DeepaMehta Topic Types'),
          $ul = $('<ul>').append($('<li>').text('Loading Topic Types ...')),
          mapTypes = function (t) { $ul.append($('<li>').text(t.value + ' (' + t.uri + ')')); };
      $parent.append($section.append($title).append($ul));
      rest.get_all_topic_types(function (types) {
        //$ul.empty();
        types.sort(sortByValue).map(mapTypes);
      });
    }
  };
});
