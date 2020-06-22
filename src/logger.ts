import { EventEmitter } from "events"

import { defaultTransport } from "./default-transport";
import { defaultForm } from "./default-form";
import { Form } from "./form";
import { Transport } from "./transport";

export class Logger extends EventEmitter {

    public readonly form: Form;
    public readonly transport: Transport;

    public constructor(
        form: Form = defaultForm,
        transport: Transport = defaultTransport,
    ) {
        super();
        this.form = form;
        this.transport = transport;
        this.on("transport", transport);
    }

    public child(childForm: Form) {
        const { form } = this;
        return new Logger((lvl, msg) => ({
            ...form(lvl, msg),
            ...childForm(lvl, msg),
        }), (msg) => this.emit("transport", msg))
    }

    public trace(msg: unknown) {
        this.emit("transport", this.form(1, msg));
    }

    public debug(msg: unknown) {
        this.emit("transport", this.form(2, msg));
    }

    public info(msg: unknown) {
        this.emit("transport", this.form(3, msg));
    }

    public warn(msg: unknown) {
        this.emit("transport", this.form(4, msg));
    }

    public error(msg: unknown) {
        this.emit("transport", this.form(5, msg));
    }

    public fatal(msg: unknown) {
        this.emit("transport", this.form(6, msg));
    }
}
