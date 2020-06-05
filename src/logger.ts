import { transport as defaultTransport } from "./transport";
import { form as defaultFrom } from "./form";

export type Form = (lvl: number, msg: unknown) => Record<PropertyKey, unknown>;
export type Transport = (msg: Record<PropertyKey, unknown>) => unknown;

export class Logger {

    public readonly form: Form;
    public readonly transport: Transport;

    constructor(
        form: Form = defaultFrom,
        transport: Transport = defaultTransport,
    ) {
        this.form = form;
        this.transport = transport;
    }

    public trace(msg: unknown) {
        return this.transport(this.form(1, msg));
    }

    public debug(msg: unknown) {
        return this.transport(this.form(2, msg));
    }

    public info(msg: unknown) {
        return this.transport(this.form(3, msg));
    }

    public warn(msg: unknown) {
        return this.transport(this.form(4, msg));
    }

    public error(msg: unknown) {
        return this.transport(this.form(5, msg));
    }

    public fatal(msg: unknown) {
        return this.transport(this.form(6, msg));
    }
}
