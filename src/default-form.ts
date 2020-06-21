let i: number = 0;

export const defaultForm = (lvl: number, msg: unknown) => ({
    lvl,
    t: Date.now(),
    i: ++i & 2147483647,
    msg,
});
