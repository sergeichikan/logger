"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport_1 = require("./transport");
exports.log = (level, mixin1, mixin2) => transport_1.transport({
    lvl: level,
    t: Date.now(),
    ...mixin1,
    ...mixin2,
});
