import { log } from "./log";
import { Mixin } from "./mixin";

export const trace = (mixin1: Mixin, mixin2?: Mixin) => log(1, mixin1, mixin2);
export const debug = (mixin1: Mixin, mixin2?: Mixin) => log(2, mixin1, mixin2);
export const info = (mixin1: Mixin, mixin2?: Mixin) => log(3, mixin1, mixin2);
export const warn = (mixin1: Mixin, mixin2?: Mixin) => log(4, mixin1, mixin2);
export const error = (mixin1: Mixin, mixin2?: Mixin) => log(5, mixin1, mixin2);
export const fatal = (mixin1: Mixin, mixin2?: Mixin) => log(6, mixin1, mixin2);
