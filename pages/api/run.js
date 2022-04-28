const antlr4ts_1 = require("antlr4ts");
const antlr4ts_2 = require("antlr4ts");
const fisoLexer_1 = require("./../../out/grammar/fiso/fisoLexer");
const fisoParser_1 = require("./../../out/grammar/fiso/fisoParser");
const CustomFisoVisitor_1 = require("./../../out/CustomFisoVisitor");


export default (req, res) => {

    const input = req.query.code;

    const inputStream = antlr4ts_1.CharStreams.fromString(input);
    const lexer = new fisoLexer_1.fisoLexer(inputStream);
    const tokenStream = new antlr4ts_2.CommonTokenStream(lexer);
    const parser = new fisoParser_1.fisoParser(tokenStream);
    const tree = parser.program();
    const visitor = new CustomFisoVisitor_1.CustomFisoVisitor(parser);
    visitor.visit(tree);

    console.log(visitor.getErrors());

    res.json({output: visitor.getOutput(), errors: visitor.getErrors()});
}