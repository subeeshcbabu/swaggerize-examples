'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /issues
 */
module.exports = {
    /**
     * summary: 
     * description: List issues.
List all issues across all the authenticated user&#39;s visible repositories.

     * parameters: filter, state, labels, sort, direction, since, X-GitHub-Media-Type, Accept, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-GitHub-Request-Id
     * produces: 
     * responses: 200, 403
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/issues',
                operation: 'get',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/issues',
                operation: 'get',
                response: '403'
            }, callback);
        }
    }
};
