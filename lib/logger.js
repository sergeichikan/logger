"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("./transport");
const form_1 = require("./form");
class Logger {
    constructor(form = form_1.form, transport = transport_1.transport) {
        this.form = form;
        this.transport = transport;
    }
    trace(msg) {
        return this.transport(this.form(1, msg));
    }
    debug(msg) {
        return this.transport(this.form(2, msg));
    }
    info(msg) {
        return this.transport(this.form(3, msg));
    }
    warn(msg) {
        return this.transport(this.form(4, msg));
    }
    error(msg) {
        return this.transport(this.form(5, msg));
    }
    fatal(msg) {
        return this.transport(this.form(6, msg));
    }
}
exports.Logger = Logger;
