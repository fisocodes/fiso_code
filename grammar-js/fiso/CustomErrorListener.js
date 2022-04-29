"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorListener = void 0;
const antlr4ts_1 = require("antlr4ts");
let errors;
class CustomErrorListener extends antlr4ts_1.ConsoleErrorListener {
    constructor() {
        super();
        errors = [];
    }
    getErrors() {
        return errors;
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        errors.push(`Error at [${line}][${charPositionInLine}]: ${msg}`);
    }
}
exports.CustomErrorListener = CustomErrorListener;
