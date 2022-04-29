"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const antlr4ts_2 = require("antlr4ts");
const FisoLexer_1 = require("./../../grammar-js/fiso/FisoLexer");
const FisoParser_1 = require("./../../grammar-js/fiso/FisoParser");
const CustomFisoVisitor_1 = require("./../../grammar-js/fiso/CustomFisoVisitor");
const CustomErrorListener_1 = require("./../../grammar-js/fiso/CustomErrorListener");

export default (req, res) => {

    const input = req.query.code;
    const errorListener = new CustomErrorListener_1.CustomErrorListener();
    const inputStream = antlr4ts_1.CharStreams.fromString(input);
    const lexer = new FisoLexer_1.FisoLexer(inputStream);
    const tokenStream = new antlr4ts_2.CommonTokenStream(lexer);
    const parser = new FisoParser_1.FisoParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    const tree = parser.program();
    const visitor = new CustomFisoVisitor_1.CustomFisoVisitor(parser);
    visitor.visit(tree);
    console.log(visitor.getOutput());
    res.json({output: visitor.getOutput(), errors: errorListener.getErrors()});
}