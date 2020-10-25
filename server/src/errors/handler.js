"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler = function (error, request, response, next) {
    console.error(error);
    return response.status(500).json({ message: 'internal server error' });
};
exports.default = errorHandler;
