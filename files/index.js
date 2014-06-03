/*jslint browser: true, indent: 2, maxlen: 120 */
/*global define, requirejs */

// configure dependency shortcuts
requirejs.config({
  paths: {
    ko: 'lib/knockoutjs/knockout',
    text: 'lib/requirejs-text/text'
  }
});

// define index
define(['jQuery', 'ko', 'dm4rest', 'ViewModel', 'text!topic-type-list.html'],
function ($, ko, rest, ViewModel, template) {
  'use strict';

  // jQuery ready => start up
  $(function () {
    var $body = $('body');

    // query type list
    rest.get_all_topic_types(function (types) {
      $body.empty().append($('<h1>').text('DeepaMehta Topic Types'));

      // append HTML template with knockout bindings
      $body.append(template);

      // create and bind the view model
      ko.applyBindings(new ViewModel(types));
    });
  });
});
