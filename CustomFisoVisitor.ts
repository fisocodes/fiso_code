import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { AddsubExpressionContext, AssignmentContext, BooleanConditionContext, BooleanContext, ConditionConditionContext, DeclarationContext, ElseblockContext, ElseifblockContext, ExpressionConditionContext, IdConditionContext, IdExpressionContext, IfblockContext, IfelseContext, MuldivExpressionContext, NumberConditionContext, NumberExpressionContext, ParenthesisConditionContext, ParenthesisExpressionContext, PrintContext, ProgramContext, SubExpressionContext, WhileContext } from "./grammar/fiso/fisoParser";
import { fisoVisitor } from "./grammar/fiso/fisoVisitor";
import { fisoParser } from "./grammar/fiso/fisoParser";

const globalScope = new Map();
const localScope: Map<string, Object>[] = [];

let parser: fisoParser;

export class CustomFisoVisitor extends AbstractParseTreeVisitor<Object> implements fisoVisitor<Object>
{
    constructor(p: fisoParser){
        super();
        parser = p;
    }

    defaultResult()
    {
        return null;
    }

    visitPrint(ctx: PrintContext): string
    {
        console.log(ctx.condition() ? this.visit(ctx.condition()) : this.visit(ctx.expression()));
        return `${ctx.expression() ? this.visit(ctx.expression()) : this.visit(ctx.condition())}`;
    }

    visitDeclaration(ctx: DeclarationContext): number
    {
        try
        {
            if(ctx._parent._parent._parent === undefined)
            {
                if(globalScope.has(ctx.ID().text))
                {
                    throw `Variable ${ctx.ID().text} declared already`;
                }
                else
                {
                    globalScope.set(ctx.ID().text, 0);
                }
            }
            else
            {
                if(globalScope.has(ctx.ID().text) || localScope[localScope.length - 1].has(ctx.ID().text))
                {
                    throw `Variable ${ctx.ID().text} declared already`;
                }
                else
                {
                    localScope[localScope.length - 1].set(ctx.ID().text, 0);
                }
            }
        }
        catch(e)
        {
            parser.notifyErrorListeners(`${e}`);
        }

        return 0;
    }

    visitAssignment(ctx: AssignmentContext): Object
    {
        try
        {
            if(globalScope.has(ctx.ID().text))
            {
                globalScope.set(ctx.ID().text, ctx.expression() ? this.visit(ctx.expression()) : this.visit(ctx.condition()));
            }
            else if(localScope[localScope.length - 1].has(ctx.ID().text))
            {
                localScope[localScope.length - 1].set(ctx.ID().text, ctx.expression() ? this.visit(ctx.expression()) : this.visit(ctx.condition()));
            }
            else
            {
                throw `Variable ${ctx.ID().text} is not declared`;
            }
        }
        catch(e)
        {
            parser.notifyErrorListeners(`${e}`);
        }
        return ctx.expression() ? this.visit(ctx.expression()) : this.visit(ctx.condition());
    }

    visitNumberExpression(ctx: NumberExpressionContext): number
    {
        return Number(ctx.NUMBER().text);
    }

    visitIdExpression(ctx: IdExpressionContext): number
    {
        try{
            if(globalScope.has(ctx.ID().text))
            {
                return Number(globalScope.get(ctx.ID().text));
            }
            else if (localScope[localScope.length - 1].has(ctx.ID().text))
            {
                return Number(localScope[localScope.length - 1].get(ctx.ID().text));
            }
            else
            {
                throw `Variable ${ctx.ID().text} is not declared`;
            }
        }
        catch(e)
        {
            parser.notifyErrorListeners(`${e}`);
        }
    }

    visitSubExpression(ctx: SubExpressionContext): number
    {
        return -Number(this.visit(ctx.expression()));
    }

    visitParenthesisExpression(ctx: ParenthesisExpressionContext): number
    {
        return Number(this.visit(ctx.expression()));
    }

    visitAddsubExpression(ctx: AddsubExpressionContext): number
    {
        if(ctx._operator.type === fisoParser.ADD)
        {
            return Number(this.visit(ctx.expression(0))) + Number(this.visit(ctx.expression(1)));
        }
        else
        {
            return Number(this.visit(ctx.expression(0))) - Number(this.visit(ctx.expression(1)));
        }
    }

   visitMuldivExpression(ctx: MuldivExpressionContext): number
   {
       try
       {
            if(ctx._operator.type === fisoParser.MUL)
            {
                return Number(this.visit(ctx.expression(0))) * Number(this.visit(ctx.expression(1)));
            }
            else
            {
                if(this.visit(ctx.expression(1)) === 0)
                {
                    throw `Undefined. Divided by zero.`;
                }
                else
                {
                    return Number(this.visit(ctx.expression(0))) / Number(this.visit(ctx.expression(1)));
                }
            }
       }
       catch(e)
       {
            parser.notifyErrorListeners(`${e}`);
       }
   }

   visitBoolean(ctx: BooleanContext): boolean
   {
       return ctx.TRUE() ? true : false; 
   }

   visitBooleanCondition(ctx: BooleanConditionContext): boolean
   {
       return Boolean(this.visit(ctx.boolean()));
   }

   visitNumberCondition(ctx: NumberConditionContext): boolean
   {
       try
       {
            if(Number(ctx.NUMBER().text) !== 1 && Number(ctx.NUMBER().text) !== 0)
            {
               throw 'Not a valid boolean value';
               
            }
            else
            {
                return Number(ctx.NUMBER().text) === 1 ? true : false;
            }
       }
       catch(e)
       {
            parser.notifyErrorListeners(`${e}`);
       }
    }

   visitIdCondition(ctx: IdConditionContext): boolean
   {
        try{
            if(globalScope.has(ctx.ID().text))
            {
                const value = globalScope.get(ctx.ID().text);

                if(value == 0 || value == 'false')
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
            else if (localScope[localScope.length - 1].has(ctx.ID().text))
            {
                const value = localScope[localScope.length - 1].get(ctx.ID().text);

                if(value == 0 || value == 'false')
                {
                    return false;
                }
                else
                {
                    return true
                }        
            }
            else
            {
                throw `Variable ${ctx.ID().text} is not declared`;
            }
        }
        catch(e)
        {
            parser.notifyErrorListeners(`${e}`);
        }
   }

   visitParenthesisCondition(ctx: ParenthesisConditionContext): boolean
   {
       return Boolean(this.visit(ctx.condition()));
   }

   visitExpressionCondition(ctx: ExpressionConditionContext): boolean
   {
       try
       {
            switch (ctx.lo()._start.type) {
                case fisoParser.GREATHER:
                    return this.visit(ctx.expression(0)) > this.visit(ctx.expression(1));
                    break;
                case fisoParser.LESSER:
                    return this.visit(ctx.expression(0)) < this.visit(ctx.expression(1));
                    break;
                case fisoParser.GREATEQUAL:
                    return this.visit(ctx.expression(0)) >= this.visit(ctx.expression(1));
                    break;
                case fisoParser.LESSEQUAL:
                    return this.visit(ctx.expression(0)) <= this.visit(ctx.expression(1));
                    break;
                case fisoParser.EQUAL:
                    return this.visit(ctx.expression(0)) === this.visit(ctx.expression(1));
                    break;
                case fisoParser.DIFFERENT:
                    return this.visit(ctx.expression(0)) !== this.visit(ctx.expression(1));
                    break;
                default:
                    throw 'No valid logic operation';
                    break;
            }
       }
       catch(e)
       {
            parser.notifyErrorListeners(`${e}`);
       }
   }

   visitConditionCondition(ctx: ConditionConditionContext): boolean
   {
        try
        {
            switch (ctx.lo()._start.type) {
                case fisoParser.OR:
                    return Boolean(this.visit(ctx.condition(0))) || Boolean(this.visit(ctx.condition(1)));
                    break;
                case fisoParser.AND:
                    return Boolean(this.visit(ctx.condition(0))) && Boolean(this.visit(ctx.condition(1)));
                    break;
                default:
                    throw 'No valid logic operation';
                    break;
            }
        }
        catch(e)
        {
            parser.notifyErrorListeners(`${e}`);
        }
   }

   visitIfelse(ctx: IfelseContext): boolean
   {
       ctx.children.every(block => {
           return this.visit(block) ? false : true;
       });

       return false;
   }

   visitIfblock(ctx: IfblockContext): boolean
   {
       localScope.push(new Map());

       if(this.visit(ctx.condition()))
       {
           ctx.statement().forEach(statement => this.visit(statement));
           localScope.pop();
           return true;
       }

       localScope.pop();
       return false;
   }

   visitElseifblock(ctx: ElseifblockContext): boolean
   {
        localScope.push(new Map());

        if(this.visit(ctx.condition()))
        {
            ctx.statement().forEach(statement => this.visit(statement));
            localScope.pop();
            return true;
        }

        localScope.pop();
        return false;
   }

   visitElseblock(ctx: ElseblockContext): Object
   {
       localScope.push(new Map());
       ctx.statement().forEach(statement => this.visit(statement));
       localScope.pop();
       return false
   }

   visitWhile (ctx: WhileContext): Object
   {
       while(this.visit(ctx.condition()))
       {
           ctx.statement().forEach(statement => this.visit(statement));
       }
       return 0;
   }
}