"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const antlr4ts_2 = require("antlr4ts");
const fisoLexer_1 = require("./grammar/fiso/fisoLexer");
const fisoParser_1 = require("./grammar/fiso/fisoParser");
const CustomFisoVisitor_1 = require("./CustomFisoVisitor");
const fs = require('fs');
fs.readFile('./test.fiso', 'utf8', (e, data) => {
    if (e) {
        console.log(e);
        process.exit(1);
    }
    else {
        const inputStream = antlr4ts_1.CharStreams.fromString(data);
        const lexer = new fisoLexer_1.fisoLexer(inputStream);
        const tokenStream = new antlr4ts_2.CommonTokenStream(lexer);
        const parser = new fisoParser_1.fisoParser(tokenStream);
        const tree = parser.program();
        const visitor = new CustomFisoVisitor_1.CustomFisoVisitor(parser);
        visitor.visit(tree);
    }
});
