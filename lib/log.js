"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("./transport");
const form_1 = require("./form");
exports.log = (lvl, msg) => {
    return transport_1.transport(form_1.form(lvl, msg));
};
