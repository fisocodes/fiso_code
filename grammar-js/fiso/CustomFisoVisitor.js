"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFisoVisitor = void 0;
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const FisoParser_1 = require("./FisoParser");
let globalScope;
let localScope;
let output;
let parser;
class CustomFisoVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor(p) {
        super();
        parser = p;
        globalScope = new Map();
        localScope = [];
        output = [];
    }
    defaultResult() {
        return null;
    }
    getOutput() {
        return output;
    }
    visitPrint(ctx) {
        output.push(ctx.condition() ? this.visit(ctx.condition()) : this.visit(ctx.expression()));
        return `${ctx.expression() ? this.visit(ctx.expression()) : this.visit(ctx.condition())}`;
    }
    visitDeclaration(ctx) {
        try {
            if (ctx._parent._parent._parent === undefined) {
                if (globalScope.has(ctx.ID().text)) {
                    throw `Variable ${ctx.ID().text} declared already`;
                }
                else {
                    globalScope.set(ctx.ID().text, 0);
                }
            }
            else {
                if (globalScope.has(ctx.ID().text) || localScope[localScope.length - 1].has(ctx.ID().text)) {
                    throw `Variable ${ctx.ID().text} declared already`;
                }
                else {
                    localScope[localScope.length - 1].set(ctx.ID().text, 0);
                }
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM A DECLARATION) ${e}`, ctx.ID()._symbol, null);
        }
        return 0;
    }
    visitAssignment(ctx) {
        try {
            if (globalScope.has(ctx.ID().text)) {
                globalScope.set(ctx.ID().text, ctx.expression() ? this.visit(ctx.expression()) : this.visit(ctx.condition()));
            }
            else if (localScope[localScope.length - 1]) {
                if (localScope[localScope.length - 1].has(ctx.ID().text)) {
                    localScope[localScope.length - 1].set(ctx.ID().text, ctx.expression() ? this.visit(ctx.expression()) : this.visit(ctx.condition()));
                }
                else {
                    throw `Variable ${ctx.ID().text} is not declared`;
                }
            }
            else {
                throw `Variable ${ctx.ID().text} is not declared`;
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM AN ASSIGNMENT) ${e}`, ctx.ID()._symbol, null);
        }
        return 0;
    }
    visitNumberExpression(ctx) {
        return Number(ctx.NUMBER().text);
    }
    visitIdExpression(ctx) {
        try {
            if (globalScope.has(ctx.ID().text)) {
                return Number(globalScope.get(ctx.ID().text));
            }
            else if (localScope[localScope.length - 1]) {
                if (localScope[localScope.length - 1].has(ctx.ID().text)) {
                    return Number(localScope[localScope.length - 1].get(ctx.ID().text));
                }
                else {
                    throw `Variable ${ctx.ID().text} is not declared`;
                }
            }
            else {
                throw `Variable ${ctx.ID().text} is not declared`;
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM AN ID AND AN EXPRESSION) ${e}`, ctx.ID()._symbol, null);
        }
        return null;
    }
    visitSubExpression(ctx) {
        return -Number(this.visit(ctx.expression()));
    }
    visitParenthesisExpression(ctx) {
        return Number(this.visit(ctx.expression()));
    }
    visitAddsubExpression(ctx) {
        if (ctx._operator.type === FisoParser_1.FisoParser.ADD) {
            return Number(this.visit(ctx.expression(0))) + Number(this.visit(ctx.expression(1)));
        }
        else {
            return Number(this.visit(ctx.expression(0))) - Number(this.visit(ctx.expression(1)));
        }
    }
    visitMuldivExpression(ctx) {
        try {
            if (ctx._operator.type === FisoParser_1.FisoParser.MUL) {
                return Number(this.visit(ctx.expression(0))) * Number(this.visit(ctx.expression(1)));
            }
            else {
                if (this.visit(ctx.expression(1)) === 0) {
                    throw `Undefined. Divided by zero.`;
                }
                else {
                    return Number(this.visit(ctx.expression(0))) / Number(this.visit(ctx.expression(1)));
                }
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM A MULTIPLY/DIVIDE EXPRESSION) ${e}`, ctx._operator, null);
        }
    }
    visitBoolean(ctx) {
        return ctx.TRUE() ? true : false;
    }
    visitBooleanCondition(ctx) {
        return Boolean(this.visit(ctx.boolean()));
    }
    visitNumberCondition(ctx) {
        try {
            if (Number(ctx.NUMBER().text) !== 1 && Number(ctx.NUMBER().text) !== 0) {
                throw 'Not a valid boolean value';
            }
            else {
                return Number(ctx.NUMBER().text) === 1 ? true : false;
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM A NUMBER AND A CONDITION) ${e}`, ctx.NUMBER()._symbol, null);
        }
    }
    visitIdCondition(ctx) {
        try {
            if (globalScope.has(ctx.ID().text)) {
                const value = globalScope.get(ctx.ID().text);
                if (value == 0 || value == 'false') {
                    return false;
                }
                else {
                    return true;
                }
            }
            else if (localScope[localScope.length - 1].has(ctx.ID().text)) {
                const value = localScope[localScope.length - 1].get(ctx.ID().text);
                if (value == 0 || value == 'false') {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                throw `Variable ${ctx.ID().text} is not declared`;
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM AN ID AND A CONDITION) ${e}`, ctx.ID()._symbol, null);
        }
    }
    visitParenthesisCondition(ctx) {
        return Boolean(this.visit(ctx.condition()));
    }
    visitExpressionCondition(ctx) {
        try {
            switch (ctx.lo()._start.type) {
                case FisoParser_1.FisoParser.GREATHER:
                    return this.visit(ctx.expression(0)) > this.visit(ctx.expression(1));
                    break;
                case FisoParser_1.FisoParser.LESSER:
                    return this.visit(ctx.expression(0)) < this.visit(ctx.expression(1));
                    break;
                case FisoParser_1.FisoParser.GREATEQUAL:
                    return this.visit(ctx.expression(0)) >= this.visit(ctx.expression(1));
                    break;
                case FisoParser_1.FisoParser.LESSEQUAL:
                    return this.visit(ctx.expression(0)) <= this.visit(ctx.expression(1));
                    break;
                case FisoParser_1.FisoParser.EQUAL:
                    return this.visit(ctx.expression(0)) === this.visit(ctx.expression(1));
                    break;
                case FisoParser_1.FisoParser.DIFFERENT:
                    return this.visit(ctx.expression(0)) !== this.visit(ctx.expression(1));
                    break;
                default:
                    throw 'No valid logic operation';
                    break;
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM AN EXPRESSION AND A CONDITION) ${e}`, ctx.lo()._start, null);
        }
    }
    visitConditionCondition(ctx) {
        try {
            switch (ctx.lo()._start.type) {
                case FisoParser_1.FisoParser.OR:
                    return Boolean(this.visit(ctx.condition(0))) || Boolean(this.visit(ctx.condition(1)));
                    break;
                case FisoParser_1.FisoParser.AND:
                    return Boolean(this.visit(ctx.condition(0))) && Boolean(this.visit(ctx.condition(1)));
                    break;
                default:
                    throw 'No valid logic operation';
                    break;
            }
        }
        catch (e) {
            parser.notifyErrorListeners(`(FROM A CONDITION AND A CONDITION) ${e}`, ctx.lo()._start, null);
        }
    }
    visitIfelse(ctx) {
        ctx.children.every(block => {
            return this.visit(block) ? false : true;
        });
        return false;
    }
    visitIfblock(ctx) {
        localScope.push(new Map());
        if (this.visit(ctx.condition())) {
            ctx.statement().forEach(statement => this.visit(statement));
            localScope.pop();
            return true;
        }
        localScope.pop();
        return false;
    }
    visitElseifblock(ctx) {
        localScope.push(new Map());
        if (this.visit(ctx.condition())) {
            ctx.statement().forEach(statement => this.visit(statement));
            localScope.pop();
            return true;
        }
        localScope.pop();
        return false;
    }
    visitElseblock(ctx) {
        localScope.push(new Map());
        ctx.statement().forEach(statement => this.visit(statement));
        localScope.pop();
        return false;
    }
    visitWhile(ctx) {
        while (this.visit(ctx.condition())) {
            ctx.statement().forEach(statement => this.visit(statement));
        }
        return 0;
    }
}
exports.CustomFisoVisitor = CustomFisoVisitor;
