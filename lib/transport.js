"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = (message) => process.stdout.write(JSON.stringify(message) + "\n");
