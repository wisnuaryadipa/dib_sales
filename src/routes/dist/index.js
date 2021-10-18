"use strict";
exports.__esModule = true;
var express_1 = require("express");
var api_1 = require("@src/routes/api");
var apiRouter = express_1.Router();
apiRouter.use('/v1', api_1["default"]);
exports["default"] = apiRouter;
