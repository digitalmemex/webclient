/*jslint indent: 2, maxlen: 120 */
/*global define */

define(['TopicTypeList', 'TopicType'], function (TopicTypeList, TopicType) {
  'use strict';

  // create a TopicType from a REST response item
  function koType(values) {
    var type = new TopicType();
    type.id(values.id);
    type.uri(values.uri);
    type.value(values.value);
    return type;
  }

  // create and populate view model
  function ViewModel(types) {
    var list = new TopicTypeList();
    types.sort(function (a, b) {
      return a.value > b.value;
    }).forEach(function (type) {
      list.types.push(koType(type));
    });
    return list;
  }

  // return constructor
  return ViewModel;
});
