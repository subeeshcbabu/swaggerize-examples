'use strict';
var dataProvider = require('../../../data/artists/{id}/top-tracks.js');
/**
 * Operations on /artists/{id}/top-tracks
 */
module.exports = {
    /**
     * summary: 
     * description: [Get an Artist&#39;s Top Tracks](https://developer.spotify.com/web-api/get-artists-top-tracks/)

     * parameters: id, country
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
