'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright <%= year %>
 */

var path = require('path'),
    root = path.dirname(require.main.filename),
    route = require(root + '/vendor/router');

module.exports = function (app) {
    route.setModule('<%= module.ucfirst() %>');

    route.get('/<%= module.toLowerCase() %>', '<%= module.ucfirst() %>Controller@index');
};
