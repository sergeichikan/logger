"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("./log");
exports.trace = (mixin1, mixin2) => log_1.log(1, mixin1, mixin2);
exports.debug = (mixin1, mixin2) => log_1.log(2, mixin1, mixin2);
exports.info = (mixin1, mixin2) => log_1.log(3, mixin1, mixin2);
exports.warn = (mixin1, mixin2) => log_1.log(4, mixin1, mixin2);
exports.error = (mixin1, mixin2) => log_1.log(5, mixin1, mixin2);
exports.fatal = (mixin1, mixin2) => log_1.log(6, mixin1, mixin2);
