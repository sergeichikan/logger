import { Mixin } from "./mixin";
export declare class Logger {
    private readonly mixin1;
    constructor(mixin1: Mixin);
    trace(mixin2: Mixin): unknown;
    debug(mixin2: Mixin): unknown;
    info(mixin2: Mixin): unknown;
    warn(mixin2: Mixin): unknown;
    error(mixin2: Mixin): unknown;
    fatal(mixin2: Mixin): unknown;
}
