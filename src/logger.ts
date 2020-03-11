import { debug, error, fatal, info, trace, warn } from "./logs";
import { Mixin } from "./mixin";

export class Logger {

    private readonly mixin1: Mixin;

    constructor(mixin1: Mixin) {
        this.mixin1 = mixin1;
    }

    public trace(mixin2: Mixin) {
        return trace(this.mixin1, mixin2);
    }

    public debug(mixin2: Mixin) {
        return debug(this.mixin1, mixin2);
    }

    public info(mixin2: Mixin) {
        return info(this.mixin1, mixin2);
    }

    public warn(mixin2: Mixin) {
        return warn(this.mixin1, mixin2);
    }

    public error(mixin2: Mixin) {
        return error(this.mixin1, mixin2);
    }

    public fatal(mixin2: Mixin) {
        return fatal(this.mixin1, mixin2);
    }
}
