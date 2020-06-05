import { log } from "./log";

export const trace = (msg: unknown) => log(1, msg);
export const debug = (msg: unknown) => log(2, msg);
export const info = (msg: unknown) => log(3, msg);
export const warn = (msg: unknown) => log(4, msg);
export const error = (msg: unknown) => log(5, msg);
export const fatal = (msg: unknown) => log(6, msg);
