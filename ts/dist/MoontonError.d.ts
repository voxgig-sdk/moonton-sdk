import { Context } from './Context';
declare class MoontonError extends Error {
    isMoontonError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MoontonError };
