// Generated from grammar/fiso/fiso.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { fisoVisitor } from "./fisoVisitor";


export class fisoParser extends Parser {
	public static readonly LP = 1;
	public static readonly RP = 2;
	public static readonly LCB = 3;
	public static readonly RCB = 4;
	public static readonly MUL = 5;
	public static readonly DIV = 6;
	public static readonly ADD = 7;
	public static readonly SUB = 8;
	public static readonly GREATHER = 9;
	public static readonly LESSER = 10;
	public static readonly GREATEQUAL = 11;
	public static readonly LESSEQUAL = 12;
	public static readonly AND = 13;
	public static readonly OR = 14;
	public static readonly EQUAL = 15;
	public static readonly DIFFERENT = 16;
	public static readonly VAR = 17;
	public static readonly PRINT = 18;
	public static readonly IF = 19;
	public static readonly ELSE = 20;
	public static readonly WHILE = 21;
	public static readonly ASSIGN = 22;
	public static readonly NUMBER = 23;
	public static readonly TRUE = 24;
	public static readonly FALSE = 25;
	public static readonly ID = 26;
	public static readonly BLANKS = 27;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_print = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_assignment = 4;
	public static readonly RULE_condition = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_ifelse = 7;
	public static readonly RULE_ifblock = 8;
	public static readonly RULE_elseifblock = 9;
	public static readonly RULE_elseblock = 10;
	public static readonly RULE_while = 11;
	public static readonly RULE_boolean = 12;
	public static readonly RULE_lo = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "print", "declaration", "assignment", "condition", 
		"expression", "ifelse", "ifblock", "elseifblock", "elseblock", "while", 
		"boolean", "lo",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'{'", "'}'", "'*'", "'/'", "'+'", "'-'", "'>'", 
		"'<'", "'>='", "'<='", "'&&'", "'||'", "'=='", "'!='", "'var'", "'print'", 
		"'if'", "'else'", "'while'", "'='", undefined, "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LP", "RP", "LCB", "RCB", "MUL", "DIV", "ADD", "SUB", "GREATHER", 
		"LESSER", "GREATEQUAL", "LESSEQUAL", "AND", "OR", "EQUAL", "DIFFERENT", 
		"VAR", "PRINT", "IF", "ELSE", "WHILE", "ASSIGN", "NUMBER", "TRUE", "FALSE", 
		"ID", "BLANKS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(fisoParser._LITERAL_NAMES, fisoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return fisoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "fiso.g4"; }

	// @Override
	public get ruleNames(): string[] { return fisoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return fisoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(fisoParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, fisoParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fisoParser.VAR) | (1 << fisoParser.PRINT) | (1 << fisoParser.IF) | (1 << fisoParser.WHILE) | (1 << fisoParser.ID))) !== 0)) {
				{
				{
				this.state = 28;
				this.statement();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, fisoParser.RULE_statement);
		try {
			this.state = 39;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case fisoParser.VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.declaration();
				}
				break;
			case fisoParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.assignment();
				}
				break;
			case fisoParser.PRINT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.print();
				}
				break;
			case fisoParser.IF:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this.ifelse();
				}
				break;
			case fisoParser.WHILE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 38;
				this.while();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public print(): PrintContext {
		let _localctx: PrintContext = new PrintContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, fisoParser.RULE_print);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(fisoParser.PRINT);
			this.state = 44;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 42;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 43;
				this.condition(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, fisoParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(fisoParser.VAR);
			this.state = 47;
			this.match(fisoParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, fisoParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(fisoParser.ID);
			this.state = 50;
			this.match(fisoParser.ASSIGN);
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 51;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 52;
				this.condition(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionContext = new ConditionContext(this._ctx, _parentState);
		let _prevctx: ConditionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, fisoParser.RULE_condition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				_localctx = new ExpressionConditionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 56;
				this.expression(0);
				this.state = 57;
				this.lo();
				this.state = 58;
				this.expression(0);
				}
				break;

			case 2:
				{
				_localctx = new ParenthesisConditionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 60;
				this.match(fisoParser.LP);
				this.state = 61;
				this.condition(0);
				this.state = 62;
				this.match(fisoParser.RP);
				}
				break;

			case 3:
				{
				_localctx = new BooleanConditionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 64;
				this.boolean();
				}
				break;

			case 4:
				{
				_localctx = new NumberConditionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 65;
				this.match(fisoParser.NUMBER);
				}
				break;

			case 5:
				{
				_localctx = new IdConditionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 66;
				this.match(fisoParser.ID);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 75;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionConditionContext(new ConditionContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, fisoParser.RULE_condition);
					this.state = 69;
					if (!(this.precpred(this._ctx, 6))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
					}
					this.state = 70;
					this.lo();
					this.state = 71;
					this.condition(7);
					}
					}
				}
				this.state = 77;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, fisoParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case fisoParser.SUB:
				{
				_localctx = new SubExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 79;
				this.match(fisoParser.SUB);
				this.state = 80;
				this.expression(6);
				}
				break;
			case fisoParser.LP:
				{
				_localctx = new ParenthesisExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 81;
				this.match(fisoParser.LP);
				this.state = 82;
				this.expression(0);
				this.state = 83;
				this.match(fisoParser.RP);
				}
				break;
			case fisoParser.NUMBER:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 85;
				this.match(fisoParser.NUMBER);
				}
				break;
			case fisoParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 86;
				this.match(fisoParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 97;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 95;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new MuldivExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, fisoParser.RULE_expression);
						this.state = 89;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 90;
						(_localctx as MuldivExpressionContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === fisoParser.MUL || _la === fisoParser.DIV)) {
							(_localctx as MuldivExpressionContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 91;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new AddsubExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, fisoParser.RULE_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 93;
						(_localctx as AddsubExpressionContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === fisoParser.ADD || _la === fisoParser.SUB)) {
							(_localctx as AddsubExpressionContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 94;
						this.expression(5);
						}
						break;
					}
					}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifelse(): IfelseContext {
		let _localctx: IfelseContext = new IfelseContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, fisoParser.RULE_ifelse);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.ifblock();
			this.state = 104;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 101;
					this.elseifblock();
					}
					}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === fisoParser.ELSE) {
				{
				this.state = 107;
				this.elseblock();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifblock(): IfblockContext {
		let _localctx: IfblockContext = new IfblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, fisoParser.RULE_ifblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(fisoParser.IF);
			this.state = 111;
			this.condition(0);
			this.state = 112;
			this.match(fisoParser.LCB);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fisoParser.VAR) | (1 << fisoParser.PRINT) | (1 << fisoParser.IF) | (1 << fisoParser.WHILE) | (1 << fisoParser.ID))) !== 0)) {
				{
				{
				this.state = 113;
				this.statement();
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 119;
			this.match(fisoParser.RCB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseifblock(): ElseifblockContext {
		let _localctx: ElseifblockContext = new ElseifblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, fisoParser.RULE_elseifblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(fisoParser.ELSE);
			this.state = 122;
			this.match(fisoParser.IF);
			this.state = 123;
			this.condition(0);
			this.state = 124;
			this.match(fisoParser.LCB);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fisoParser.VAR) | (1 << fisoParser.PRINT) | (1 << fisoParser.IF) | (1 << fisoParser.WHILE) | (1 << fisoParser.ID))) !== 0)) {
				{
				{
				this.state = 125;
				this.statement();
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this.match(fisoParser.RCB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseblock(): ElseblockContext {
		let _localctx: ElseblockContext = new ElseblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, fisoParser.RULE_elseblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(fisoParser.ELSE);
			this.state = 134;
			this.match(fisoParser.LCB);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fisoParser.VAR) | (1 << fisoParser.PRINT) | (1 << fisoParser.IF) | (1 << fisoParser.WHILE) | (1 << fisoParser.ID))) !== 0)) {
				{
				{
				this.state = 135;
				this.statement();
				}
				}
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 141;
			this.match(fisoParser.RCB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while(): WhileContext {
		let _localctx: WhileContext = new WhileContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, fisoParser.RULE_while);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(fisoParser.WHILE);
			this.state = 144;
			this.condition(0);
			this.state = 145;
			this.match(fisoParser.LCB);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fisoParser.VAR) | (1 << fisoParser.PRINT) | (1 << fisoParser.IF) | (1 << fisoParser.WHILE) | (1 << fisoParser.ID))) !== 0)) {
				{
				{
				this.state = 146;
				this.statement();
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
			this.match(fisoParser.RCB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolean(): BooleanContext {
		let _localctx: BooleanContext = new BooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, fisoParser.RULE_boolean);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_la = this._input.LA(1);
			if (!(_la === fisoParser.TRUE || _la === fisoParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lo(): LoContext {
		let _localctx: LoContext = new LoContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, fisoParser.RULE_lo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << fisoParser.GREATHER) | (1 << fisoParser.LESSER) | (1 << fisoParser.GREATEQUAL) | (1 << fisoParser.LESSEQUAL) | (1 << fisoParser.AND) | (1 << fisoParser.OR) | (1 << fisoParser.EQUAL) | (1 << fisoParser.DIFFERENT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.condition_sempred(_localctx as ConditionContext, predIndex);

		case 6:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private condition_sempred(_localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D\xA1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03*\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x05\x04/\n\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x068\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07F\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07L\n\x07\f\x07\x0E\x07O\v\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bZ\n\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\bb\n\b\f\b\x0E\be\v\b\x03\t\x03\t\x07\ti\n\t\f\t\x0E" +
		"\tl\v\t\x03\t\x05\to\n\t\x03\n\x03\n\x03\n\x03\n\x07\nu\n\n\f\n\x0E\n" +
		"x\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\x81\n\v\f\v\x0E" +
		"\v\x84\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\x8B\n\f\f\f\x0E\f\x8E\v" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\x96\n\r\f\r\x0E\r\x99\v\r" +
		"\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x04\f\x0E" +
		"\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x06\x03\x02\x07\b\x03\x02" +
		"\t\n\x03\x02\x1A\x1B\x03\x02\v\x12\x02\xA9\x02!\x03\x02\x02\x02\x04)\x03" +
		"\x02\x02\x02\x06+\x03\x02\x02\x02\b0\x03\x02\x02\x02\n3\x03\x02\x02\x02" +
		"\fE\x03\x02\x02\x02\x0EY\x03\x02\x02\x02\x10f\x03\x02\x02\x02\x12p\x03" +
		"\x02\x02\x02\x14{\x03\x02\x02\x02\x16\x87\x03\x02\x02\x02\x18\x91\x03" +
		"\x02\x02\x02\x1A\x9C\x03\x02\x02\x02\x1C\x9E\x03\x02\x02\x02\x1E \x05" +
		"\x04\x03\x02\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02" +
		"\x02!\"\x03\x02\x02\x02\"\x03\x03\x02\x02\x02#!\x03\x02\x02\x02$*\x05" +
		"\b\x05\x02%*\x05\n\x06\x02&*\x05\x06\x04\x02\'*\x05\x10\t\x02(*\x05\x18" +
		"\r\x02)$\x03\x02\x02\x02)%\x03\x02\x02\x02)&\x03\x02\x02\x02)\'\x03\x02" +
		"\x02\x02)(\x03\x02\x02\x02*\x05\x03\x02\x02\x02+.\x07\x14\x02\x02,/\x05" +
		"\x0E\b\x02-/\x05\f\x07\x02.,\x03\x02\x02\x02.-\x03\x02\x02\x02/\x07\x03" +
		"\x02\x02\x0201\x07\x13\x02\x0212\x07\x1C\x02\x022\t\x03\x02\x02\x0234" +
		"\x07\x1C\x02\x0247\x07\x18\x02\x0258\x05\x0E\b\x0268\x05\f\x07\x0275\x03" +
		"\x02\x02\x0276\x03\x02\x02\x028\v\x03\x02\x02\x029:\b\x07\x01\x02:;\x05" +
		"\x0E\b\x02;<\x05\x1C\x0F\x02<=\x05\x0E\b\x02=F\x03\x02\x02\x02>?\x07\x03" +
		"\x02\x02?@\x05\f\x07\x02@A\x07\x04\x02\x02AF\x03\x02\x02\x02BF\x05\x1A" +
		"\x0E\x02CF\x07\x19\x02\x02DF\x07\x1C\x02\x02E9\x03\x02\x02\x02E>\x03\x02" +
		"\x02\x02EB\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02FM\x03\x02" +
		"\x02\x02GH\f\b\x02\x02HI\x05\x1C\x0F\x02IJ\x05\f\x07\tJL\x03\x02\x02\x02" +
		"KG\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02\x02\x02" +
		"N\r\x03\x02\x02\x02OM\x03\x02\x02\x02PQ\b\b\x01\x02QR\x07\n\x02\x02RZ" +
		"\x05\x0E\b\bST\x07\x03\x02\x02TU\x05\x0E\b\x02UV\x07\x04\x02\x02VZ\x03" +
		"\x02\x02\x02WZ\x07\x19\x02\x02XZ\x07\x1C\x02\x02YP\x03\x02\x02\x02YS\x03" +
		"\x02\x02\x02YW\x03\x02\x02\x02YX\x03\x02\x02\x02Zc\x03\x02\x02\x02[\\" +
		"\f\x07\x02\x02\\]\t\x02\x02\x02]b\x05\x0E\b\b^_\f\x06\x02\x02_`\t\x03" +
		"\x02\x02`b\x05\x0E\b\x07a[\x03\x02\x02\x02a^\x03\x02\x02\x02be\x03\x02" +
		"\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\x0F\x03\x02\x02\x02ec\x03" +
		"\x02\x02\x02fj\x05\x12\n\x02gi\x05\x14\v\x02hg\x03\x02\x02\x02il\x03\x02" +
		"\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02" +
		"\x02\x02mo\x05\x16\f\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02o\x11\x03" +
		"\x02\x02\x02pq\x07\x15\x02\x02qr\x05\f\x07\x02rv\x07\x05\x02\x02su\x05" +
		"\x04\x03\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03" +
		"\x02\x02\x02wy\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x07\x06\x02\x02z\x13" +
		"\x03\x02\x02\x02{|\x07\x16\x02\x02|}\x07\x15\x02\x02}~\x05\f\x07\x02~" +
		"\x82\x07\x05\x02\x02\x7F\x81\x05\x04\x03\x02\x80\x7F\x03\x02\x02\x02\x81" +
		"\x84\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83" +
		"\x85\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x85\x86\x07\x06\x02\x02\x86" +
		"\x15\x03\x02\x02\x02\x87\x88\x07\x16\x02\x02\x88\x8C\x07\x05\x02\x02\x89" +
		"\x8B\x05\x04\x03\x02\x8A\x89\x03\x02\x02\x02\x8B\x8E\x03\x02\x02\x02\x8C" +
		"\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03\x02\x02\x02\x8E" +
		"\x8C\x03\x02\x02\x02\x8F\x90\x07\x06\x02\x02\x90\x17\x03\x02\x02\x02\x91" +
		"\x92\x07\x17\x02\x02\x92\x93\x05\f\x07\x02\x93\x97\x07\x05\x02\x02\x94" +
		"\x96\x05\x04\x03\x02\x95\x94\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97" +
		"\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99" +
		"\x97\x03\x02\x02\x02\x9A\x9B\x07\x06\x02\x02\x9B\x19\x03\x02\x02\x02\x9C" +
		"\x9D\t\x04\x02\x02\x9D\x1B\x03\x02\x02\x02\x9E\x9F\t\x05\x02\x02\x9F\x1D" +
		"\x03\x02\x02\x02\x11!).7EMYacjnv\x82\x8C\x97";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!fisoParser.__ATN) {
			fisoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(fisoParser._serializedATN));
		}

		return fisoParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_program; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public print(): PrintContext | undefined {
		return this.tryGetRuleContext(0, PrintContext);
	}
	public ifelse(): IfelseContext | undefined {
		return this.tryGetRuleContext(0, IfelseContext);
	}
	public while(): WhileContext | undefined {
		return this.tryGetRuleContext(0, WhileContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(fisoParser.PRINT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_print; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitPrint) {
			return visitor.visitPrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(fisoParser.VAR, 0); }
	public ID(): TerminalNode { return this.getToken(fisoParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_declaration; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(fisoParser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(fisoParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_assignment; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_condition; }
	public copyFrom(ctx: ConditionContext): void {
		super.copyFrom(ctx);
	}
}
export class ConditionConditionContext extends ConditionContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public lo(): LoContext {
		return this.getRuleContext(0, LoContext);
	}
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitConditionCondition) {
			return visitor.visitConditionCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionConditionContext extends ConditionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public lo(): LoContext {
		return this.getRuleContext(0, LoContext);
	}
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitExpressionCondition) {
			return visitor.visitExpressionCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisConditionContext extends ConditionContext {
	public LP(): TerminalNode { return this.getToken(fisoParser.LP, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RP(): TerminalNode { return this.getToken(fisoParser.RP, 0); }
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitParenthesisCondition) {
			return visitor.visitParenthesisCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanConditionContext extends ConditionContext {
	public boolean(): BooleanContext {
		return this.getRuleContext(0, BooleanContext);
	}
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitBooleanCondition) {
			return visitor.visitBooleanCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberConditionContext extends ConditionContext {
	public NUMBER(): TerminalNode { return this.getToken(fisoParser.NUMBER, 0); }
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitNumberCondition) {
			return visitor.visitNumberCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdConditionContext extends ConditionContext {
	public ID(): TerminalNode { return this.getToken(fisoParser.ID, 0); }
	constructor(ctx: ConditionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitIdCondition) {
			return visitor.visitIdCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SubExpressionContext extends ExpressionContext {
	public SUB(): TerminalNode { return this.getToken(fisoParser.SUB, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitSubExpression) {
			return visitor.visitSubExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MuldivExpressionContext extends ExpressionContext {
	public _operator!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(fisoParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(fisoParser.DIV, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitMuldivExpression) {
			return visitor.visitMuldivExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddsubExpressionContext extends ExpressionContext {
	public _operator!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(fisoParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(fisoParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitAddsubExpression) {
			return visitor.visitAddsubExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisExpressionContext extends ExpressionContext {
	public LP(): TerminalNode { return this.getToken(fisoParser.LP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RP(): TerminalNode { return this.getToken(fisoParser.RP, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitParenthesisExpression) {
			return visitor.visitParenthesisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpressionContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(fisoParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdExpressionContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(fisoParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitIdExpression) {
			return visitor.visitIdExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfelseContext extends ParserRuleContext {
	public ifblock(): IfblockContext {
		return this.getRuleContext(0, IfblockContext);
	}
	public elseifblock(): ElseifblockContext[];
	public elseifblock(i: number): ElseifblockContext;
	public elseifblock(i?: number): ElseifblockContext | ElseifblockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseifblockContext);
		} else {
			return this.getRuleContext(i, ElseifblockContext);
		}
	}
	public elseblock(): ElseblockContext | undefined {
		return this.tryGetRuleContext(0, ElseblockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_ifelse; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitIfelse) {
			return visitor.visitIfelse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfblockContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(fisoParser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public LCB(): TerminalNode { return this.getToken(fisoParser.LCB, 0); }
	public RCB(): TerminalNode { return this.getToken(fisoParser.RCB, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_ifblock; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitIfblock) {
			return visitor.visitIfblock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseifblockContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(fisoParser.ELSE, 0); }
	public IF(): TerminalNode { return this.getToken(fisoParser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public LCB(): TerminalNode { return this.getToken(fisoParser.LCB, 0); }
	public RCB(): TerminalNode { return this.getToken(fisoParser.RCB, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_elseifblock; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitElseifblock) {
			return visitor.visitElseifblock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseblockContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(fisoParser.ELSE, 0); }
	public LCB(): TerminalNode { return this.getToken(fisoParser.LCB, 0); }
	public RCB(): TerminalNode { return this.getToken(fisoParser.RCB, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_elseblock; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitElseblock) {
			return visitor.visitElseblock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(fisoParser.WHILE, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public LCB(): TerminalNode { return this.getToken(fisoParser.LCB, 0); }
	public RCB(): TerminalNode { return this.getToken(fisoParser.RCB, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_while; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitWhile) {
			return visitor.visitWhile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(fisoParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(fisoParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_boolean; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoContext extends ParserRuleContext {
	public GREATHER(): TerminalNode | undefined { return this.tryGetToken(fisoParser.GREATHER, 0); }
	public LESSER(): TerminalNode | undefined { return this.tryGetToken(fisoParser.LESSER, 0); }
	public GREATEQUAL(): TerminalNode | undefined { return this.tryGetToken(fisoParser.GREATEQUAL, 0); }
	public LESSEQUAL(): TerminalNode | undefined { return this.tryGetToken(fisoParser.LESSEQUAL, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(fisoParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(fisoParser.OR, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(fisoParser.EQUAL, 0); }
	public DIFFERENT(): TerminalNode | undefined { return this.tryGetToken(fisoParser.DIFFERENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return fisoParser.RULE_lo; }
	// @Override
	public accept<Result>(visitor: fisoVisitor<Result>): Result {
		if (visitor.visitLo) {
			return visitor.visitLo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


