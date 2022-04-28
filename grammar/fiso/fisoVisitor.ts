// Generated from grammar/fiso/fiso.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SubExpressionContext } from "./fisoParser";
import { MuldivExpressionContext } from "./fisoParser";
import { AddsubExpressionContext } from "./fisoParser";
import { ParenthesisExpressionContext } from "./fisoParser";
import { NumberExpressionContext } from "./fisoParser";
import { IdExpressionContext } from "./fisoParser";
import { ConditionConditionContext } from "./fisoParser";
import { ExpressionConditionContext } from "./fisoParser";
import { ParenthesisConditionContext } from "./fisoParser";
import { BooleanConditionContext } from "./fisoParser";
import { NumberConditionContext } from "./fisoParser";
import { IdConditionContext } from "./fisoParser";
import { ProgramContext } from "./fisoParser";
import { StatementContext } from "./fisoParser";
import { PrintContext } from "./fisoParser";
import { DeclarationContext } from "./fisoParser";
import { AssignmentContext } from "./fisoParser";
import { ConditionContext } from "./fisoParser";
import { ExpressionContext } from "./fisoParser";
import { IfelseContext } from "./fisoParser";
import { IfblockContext } from "./fisoParser";
import { ElseifblockContext } from "./fisoParser";
import { ElseblockContext } from "./fisoParser";
import { WhileContext } from "./fisoParser";
import { BooleanContext } from "./fisoParser";
import { LoContext } from "./fisoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `fisoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface fisoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `subExpression`
	 * labeled alternative in `fisoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubExpression?: (ctx: SubExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `muldivExpression`
	 * labeled alternative in `fisoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMuldivExpression?: (ctx: MuldivExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `addsubExpression`
	 * labeled alternative in `fisoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddsubExpression?: (ctx: AddsubExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisExpression`
	 * labeled alternative in `fisoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `fisoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `idExpression`
	 * labeled alternative in `fisoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdExpression?: (ctx: IdExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionCondition`
	 * labeled alternative in `fisoParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionCondition?: (ctx: ConditionConditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionCondition`
	 * labeled alternative in `fisoParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionCondition?: (ctx: ExpressionConditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesisCondition`
	 * labeled alternative in `fisoParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesisCondition?: (ctx: ParenthesisConditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanCondition`
	 * labeled alternative in `fisoParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanCondition?: (ctx: BooleanConditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberCondition`
	 * labeled alternative in `fisoParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberCondition?: (ctx: NumberConditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `idCondition`
	 * labeled alternative in `fisoParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdCondition?: (ctx: IdConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.ifelse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfelse?: (ctx: IfelseContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.ifblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfblock?: (ctx: IfblockContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.elseifblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseifblock?: (ctx: ElseifblockContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.elseblock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseblock?: (ctx: ElseblockContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile?: (ctx: WhileContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;

	/**
	 * Visit a parse tree produced by `fisoParser.lo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLo?: (ctx: LoContext) => Result;
}

