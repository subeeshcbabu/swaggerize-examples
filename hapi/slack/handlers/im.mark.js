'use strict';
var dataProvider = require('../data/im.mark.js');
/**
 * Operations on /im.mark
 */
module.exports = {
    /**
     * summary: 
     * description: Sets the read cursor in a direct message channel.
     * parameters: channel, ts
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
