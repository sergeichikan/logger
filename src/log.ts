import { defaultTransport } from "./default-transport";
import { defaultForm } from "./default-form";

export const log = (lvl: number, msg: unknown) => {
    return defaultTransport(defaultForm(lvl, msg));
};
