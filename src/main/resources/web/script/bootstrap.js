/*jslint browser: true, indent: 2, maxlen: 120 */
/*global define, requirejs, jQuery, RESTClient */
'use strict';

define('jQuery', ['/de.deepamehta.webclient/script/vendor/jquery/jquery-2.0.3.min.js'], function () {
  return jQuery; // wrap jQuery
});

define('dm4rest', ['/de.deepamehta.webclient/script/util/rest_client.js'], function () {
  return new RESTClient('/core'); // wrap DeepaMehta 4 REST client utility
});

// use the file repository to load the index JavaScript
requirejs.config({ baseUrl: '/filerepo' });
requirejs(['index']);
