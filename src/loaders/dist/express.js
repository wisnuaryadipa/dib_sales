"use strict";
exports.__esModule = true;
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var api_1 = require("@src/routes/api");
exports["default"] = (function (app) {
    /**
     * Health Check endpoints
     * @TODO Explain why they are here
     */
    app.get('/status', function (req, res) {
        res.send('Express + TypeScript Server');
    });
    app.head('/status', function (req, res) {
        res.status(200).end();
    });
    app.enable('trust proxy');
    app.use(cors_1["default"]());
    app.use('/api', api_1["default"]);
    // Middleware that transforms the raw string of req.body into json
    app.use(body_parser_1["default"].json());
    /// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    /// error handlers
    app.use((function (err, req, res, next) {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    }));
    app.use((function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message
            }
        });
    }));
});
