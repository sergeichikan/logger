"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = (msg) => {
    return process.stdout.write(JSON.stringify(msg) + "\n");
};
