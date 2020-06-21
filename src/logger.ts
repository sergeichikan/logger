import { EventEmitter } from "events"

import { defaultTransport } from "./default-transport";
import { defaultForm } from "./default-form";
import { Form } from "./form";
import { Transport } from "./transport";

export class Logger extends EventEmitter {
    public constructor(
        form: Form = defaultForm,
        transport: Transport = defaultTransport,
    ) {
        super();
        this.on("transport", transport);
        this.on("trace", (msg: unknown) => this.emit("transport", form(1, msg)));
        this.on("debug", (msg: unknown) => this.emit("transport", form(2, msg)));
        this.on("info", (msg: unknown) => this.emit("transport", form(3, msg)));
        this.on("warn", (msg: unknown) => this.emit("transport", form(4, msg)));
        this.on("error", (msg: unknown) => this.emit("transport", form(5, msg)));
        this.on("fatal", (msg: unknown) => this.emit("transport", form(6, msg)));
    }

    public trace(msg: unknown) {
        this.emit("trace", msg);
    }

    public debug(msg: unknown) {
        this.emit("debug", msg);
    }

    public info(msg: unknown) {
        this.emit("info", msg);
    }

    public warn(msg: unknown) {
        this.emit("warn", msg);
    }

    public error(msg: unknown) {
        this.emit("error", msg);
    }

    public fatal(msg: unknown) {
        this.emit("fatal", msg);
    }
}
