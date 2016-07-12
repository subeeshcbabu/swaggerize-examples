'use strict';
var dataProvider = require('../data/search.messages.js');
/**
 * Operations on /search.messages
 */
module.exports = {
    /**
     * summary: 
     * description: Searches for messages matching a query.
     * parameters: query, sort, sort_dir, highlight, count, page
     * produces: 
     * responses: 200
     */
    get: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
