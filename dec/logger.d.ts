export declare type Form = (lvl: number, msg: unknown) => Record<PropertyKey, unknown>;
export declare type Transport = (msg: Record<PropertyKey, unknown>) => unknown;
export declare class Logger {
    readonly form: Form;
    readonly transport: Transport;
    constructor(form?: Form, transport?: Transport);
    trace(msg: unknown): unknown;
    debug(msg: unknown): unknown;
    info(msg: unknown): unknown;
    warn(msg: unknown): unknown;
    error(msg: unknown): unknown;
    fatal(msg: unknown): unknown;
}
