export const transport = (msg: Record<PropertyKey, unknown>): unknown => {
    return process.stdout.write(JSON.stringify(msg) + "\n");
};
