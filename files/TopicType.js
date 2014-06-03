/*jslint indent: 2, maxlen: 120 */
/*global define */

define(['ko'], function (ko) {
  'use strict';

  return function () {
    var self = this;
    self.id = ko.observable();
    self.uri = ko.observable();
    self.value = ko.observable();
  };
});