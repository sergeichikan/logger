import { transport } from "./transport";
import { form } from "./form";

export const log = (lvl: number, msg: unknown) => {
    return transport(form(lvl, msg));
};
