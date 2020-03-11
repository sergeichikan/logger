"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logs_1 = require("./logs");
class Logger {
    constructor(mixin1) {
        this.mixin1 = mixin1;
    }
    trace(mixin2) {
        return logs_1.trace(this.mixin1, mixin2);
    }
    debug(mixin2) {
        return logs_1.debug(this.mixin1, mixin2);
    }
    info(mixin2) {
        return logs_1.info(this.mixin1, mixin2);
    }
    warn(mixin2) {
        return logs_1.warn(this.mixin1, mixin2);
    }
    error(mixin2) {
        return logs_1.error(this.mixin1, mixin2);
    }
    fatal(mixin2) {
        return logs_1.fatal(this.mixin1, mixin2);
    }
}
exports.Logger = Logger;
