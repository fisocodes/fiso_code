import { CharStream } from "antlr4ts";
import { CharStreams } from "antlr4ts";
import { CommonTokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";

import { fisoLexer } from "./grammar/fiso/fisoLexer";
import { fisoParser } from "./grammar/fiso/fisoParser";
import { CustomFisoVisitor } from "./CustomFisoVisitor";

const fs = require('fs');

fs.readFile('./test.fiso', 'utf8', (e, data) => {
    if(e)
    {
        console.log(e);
        process.exit(1);
    }
    else
    {
        const inputStream: CharStream = CharStreams.fromString(data);
        const lexer: fisoLexer = new fisoLexer(inputStream);
        const tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
        const parser: fisoParser = new fisoParser(tokenStream);
        const tree: ParseTree = parser.program();

        const visitor = new CustomFisoVisitor(parser);
        visitor.visit(tree);
    }
});

