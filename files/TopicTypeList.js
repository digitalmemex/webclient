/*jslint indent: 2, maxlen: 120 */
/*global define */

define(['ko'], function (ko) {
  'use strict';

  return function () {
    var self = this;
    self.types = ko.observableArray();
  };
});
