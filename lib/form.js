"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let i = 0;
exports.form = (lvl, msg) => ({
    lvl,
    t: Date.now(),
    i: ++i & 2147483647,
    msg,
});
