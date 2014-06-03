/*jslint browser: true, indent: 2, maxlen: 120 */
/*global define */
'use strict';

// define index
define(['jQuery', 'dm4rest'], function ($, rest) {

  // jQuery ready => start up
  $(function () {
    var $body = $('body');
    $body.text('loading ...');

    // query type list
    rest.get_all_topic_types(function (types) {
      $body.empty().append($('<h1>').text('DeepaMehta Topic Types'));

      // create HTML list of types
      var $list = $('<ul>');
      types.sort(function (a, b) {
        return a.value > b.value;
      }).forEach(function (type) {
        var $type = $('<li>').text(type.value + ' - ' + type.uri);
        $list.append($type);
      });

      // view the type list
      $body.append($list);
    });
  });
});
