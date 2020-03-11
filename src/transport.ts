export const transport = (
    message: Record<PropertyKey, unknown>,
): unknown => process.stdout.write(JSON.stringify(message) + "\n");
