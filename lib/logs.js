"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("./log");
exports.trace = (msg) => log_1.log(1, msg);
exports.debug = (msg) => log_1.log(2, msg);
exports.info = (msg) => log_1.log(3, msg);
exports.warn = (msg) => log_1.log(4, msg);
exports.error = (msg) => log_1.log(5, msg);
exports.fatal = (msg) => log_1.log(6, msg);
