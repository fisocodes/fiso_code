"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const antlr4ts_2 = require("antlr4ts");
const FisoLexer_1 = require("./FisoLexer");
const FisoParser_1 = require("./FisoParser");
const CustomFisoVisitor_1 = require("./CustomFisoVisitor");
const CustomErrorListener_1 = require("./CustomErrorListener");
const fs = require('fs');
fs.readFile('./test.fiso', 'utf8', (e, data) => {
    if (e) {
        console.log(e);
        process.exit(1);
    }
    else {
        const errorListener = new CustomErrorListener_1.CustomErrorListener();
        const inputStream = antlr4ts_1.CharStreams.fromString(data);
        const lexer = new FisoLexer_1.FisoLexer(inputStream);
        const tokenStream = new antlr4ts_2.CommonTokenStream(lexer);
        const parser = new FisoParser_1.FisoParser(tokenStream);
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        const tree = parser.program();
        const visitor = new CustomFisoVisitor_1.CustomFisoVisitor(parser);
        visitor.visit(tree);
        const errors = errorListener.getErrors();
        if (errors.length > 0) {
            console.log(errors);
        }
        else {
            console.log(visitor.getOutput());
        }
    }
});
