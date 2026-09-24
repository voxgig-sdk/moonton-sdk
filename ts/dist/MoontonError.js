"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoontonError = void 0;
class MoontonError extends Error {
    isMoontonError = true;
    sdk = 'Moonton';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MoontonError = MoontonError;
//# sourceMappingURL=MoontonError.js.map