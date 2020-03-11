import { transport } from "./transport";
import { Mixin } from "./mixin";

export const log = (
    level: number,
    mixin1?: Mixin,
    mixin2?: Mixin,
): unknown => transport({
    lvl: level,
    t: Date.now(),
    ...mixin1,
    ...mixin2,
});
