"use strict";
// Generated from grammar-ts/fiso/Fiso.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoContext = exports.BooleanContext = exports.WhileContext = exports.ElseblockContext = exports.ElseifblockContext = exports.IfblockContext = exports.IfelseContext = exports.IdExpressionContext = exports.NumberExpressionContext = exports.ParenthesisExpressionContext = exports.AddsubExpressionContext = exports.MuldivExpressionContext = exports.SubExpressionContext = exports.ExpressionContext = exports.IdConditionContext = exports.NumberConditionContext = exports.BooleanConditionContext = exports.ParenthesisConditionContext = exports.ExpressionConditionContext = exports.ConditionConditionContext = exports.ConditionContext = exports.AssignmentContext = exports.DeclarationContext = exports.PrintContext = exports.StatementContext = exports.ProgramContext = exports.FisoParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class FisoParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(FisoParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return FisoParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Fiso.g4"; }
    // @Override
    get ruleNames() { return FisoParser.ruleNames; }
    // @Override
    get serializedATN() { return FisoParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, FisoParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FisoParser.VAR) | (1 << FisoParser.PRINT) | (1 << FisoParser.IF) | (1 << FisoParser.WHILE) | (1 << FisoParser.ID))) !== 0)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, FisoParser.RULE_statement);
        try {
            this.state = 39;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FisoParser.VAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 34;
                        this.declaration();
                    }
                    break;
                case FisoParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 35;
                        this.assignment();
                    }
                    break;
                case FisoParser.PRINT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 36;
                        this.print();
                    }
                    break;
                case FisoParser.IF:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 37;
                        this.ifelse();
                    }
                    break;
                case FisoParser.WHILE:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 38;
                        this.while();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    print() {
        let _localctx = new PrintContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FisoParser.RULE_print);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 41;
                this.match(FisoParser.PRINT);
                this.state = 44;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, FisoParser.RULE_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this.match(FisoParser.VAR);
                this.state = 47;
                this.match(FisoParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FisoParser.RULE_assignment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 49;
                this.match(FisoParser.ID);
                this.state = 50;
                this.match(FisoParser.ASSIGN);
                this.state = 53;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    condition(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ConditionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 10;
        this.enterRecursionRule(_localctx, 10, FisoParser.RULE_condition, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 67;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
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
                            this.match(FisoParser.LP);
                            this.state = 61;
                            this.condition(0);
                            this.state = 62;
                            this.match(FisoParser.RP);
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
                            this.match(FisoParser.NUMBER);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new IdConditionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 66;
                            this.match(FisoParser.ID);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 75;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new ConditionConditionContext(new ConditionContext(_parentctx, _parentState));
                                this.pushNewRecursionContext(_localctx, _startState, FisoParser.RULE_condition);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 12;
        this.enterRecursionRule(_localctx, 12, FisoParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 87;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case FisoParser.SUB:
                        {
                            _localctx = new SubExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 79;
                            this.match(FisoParser.SUB);
                            this.state = 80;
                            this.expression(6);
                        }
                        break;
                    case FisoParser.LP:
                        {
                            _localctx = new ParenthesisExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 81;
                            this.match(FisoParser.LP);
                            this.state = 82;
                            this.expression(0);
                            this.state = 83;
                            this.match(FisoParser.RP);
                        }
                        break;
                    case FisoParser.NUMBER:
                        {
                            _localctx = new NumberExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 85;
                            this.match(FisoParser.NUMBER);
                        }
                        break;
                    case FisoParser.ID:
                        {
                            _localctx = new IdExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 86;
                            this.match(FisoParser.ID);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 97;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 95;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MuldivExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, FisoParser.RULE_expression);
                                        this.state = 89;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 90;
                                        _localctx._operator = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === FisoParser.MUL || _la === FisoParser.DIV)) {
                                            _localctx._operator = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
                                        this.pushNewRecursionContext(_localctx, _startState, FisoParser.RULE_expression);
                                        this.state = 92;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 93;
                                        _localctx._operator = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === FisoParser.ADD || _la === FisoParser.SUB)) {
                                            _localctx._operator = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifelse() {
        let _localctx = new IfelseContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FisoParser.RULE_ifelse);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this.ifblock();
                this.state = 104;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                if (_la === FisoParser.ELSE) {
                    {
                        this.state = 107;
                        this.elseblock();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifblock() {
        let _localctx = new IfblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FisoParser.RULE_ifblock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this.match(FisoParser.IF);
                this.state = 111;
                this.condition(0);
                this.state = 112;
                this.match(FisoParser.LCB);
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FisoParser.VAR) | (1 << FisoParser.PRINT) | (1 << FisoParser.IF) | (1 << FisoParser.WHILE) | (1 << FisoParser.ID))) !== 0)) {
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
                this.match(FisoParser.RCB);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseifblock() {
        let _localctx = new ElseifblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, FisoParser.RULE_elseifblock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this.match(FisoParser.ELSE);
                this.state = 122;
                this.match(FisoParser.IF);
                this.state = 123;
                this.condition(0);
                this.state = 124;
                this.match(FisoParser.LCB);
                this.state = 128;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FisoParser.VAR) | (1 << FisoParser.PRINT) | (1 << FisoParser.IF) | (1 << FisoParser.WHILE) | (1 << FisoParser.ID))) !== 0)) {
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
                this.match(FisoParser.RCB);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elseblock() {
        let _localctx = new ElseblockContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FisoParser.RULE_elseblock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 133;
                this.match(FisoParser.ELSE);
                this.state = 134;
                this.match(FisoParser.LCB);
                this.state = 138;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FisoParser.VAR) | (1 << FisoParser.PRINT) | (1 << FisoParser.IF) | (1 << FisoParser.WHILE) | (1 << FisoParser.ID))) !== 0)) {
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
                this.match(FisoParser.RCB);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    while() {
        let _localctx = new WhileContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FisoParser.RULE_while);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(FisoParser.WHILE);
                this.state = 144;
                this.condition(0);
                this.state = 145;
                this.match(FisoParser.LCB);
                this.state = 149;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FisoParser.VAR) | (1 << FisoParser.PRINT) | (1 << FisoParser.IF) | (1 << FisoParser.WHILE) | (1 << FisoParser.ID))) !== 0)) {
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
                this.match(FisoParser.RCB);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    boolean() {
        let _localctx = new BooleanContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, FisoParser.RULE_boolean);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                _la = this._input.LA(1);
                if (!(_la === FisoParser.TRUE || _la === FisoParser.FALSE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lo() {
        let _localctx = new LoContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, FisoParser.RULE_lo);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FisoParser.GREATHER) | (1 << FisoParser.LESSER) | (1 << FisoParser.GREATEQUAL) | (1 << FisoParser.LESSEQUAL) | (1 << FisoParser.AND) | (1 << FisoParser.OR) | (1 << FisoParser.EQUAL) | (1 << FisoParser.DIFFERENT))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 5:
                return this.condition_sempred(_localctx, predIndex);
            case 6:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    condition_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 6);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 5);
            case 2:
                return this.precpred(this._ctx, 4);
        }
        return true;
    }
    static get _ATN() {
        if (!FisoParser.__ATN) {
            FisoParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(FisoParser._serializedATN));
        }
        return FisoParser.__ATN;
    }
}
exports.FisoParser = FisoParser;
FisoParser.LP = 1;
FisoParser.RP = 2;
FisoParser.LCB = 3;
FisoParser.RCB = 4;
FisoParser.MUL = 5;
FisoParser.DIV = 6;
FisoParser.ADD = 7;
FisoParser.SUB = 8;
FisoParser.GREATHER = 9;
FisoParser.LESSER = 10;
FisoParser.GREATEQUAL = 11;
FisoParser.LESSEQUAL = 12;
FisoParser.AND = 13;
FisoParser.OR = 14;
FisoParser.EQUAL = 15;
FisoParser.DIFFERENT = 16;
FisoParser.VAR = 17;
FisoParser.PRINT = 18;
FisoParser.IF = 19;
FisoParser.ELSE = 20;
FisoParser.WHILE = 21;
FisoParser.ASSIGN = 22;
FisoParser.NUMBER = 23;
FisoParser.TRUE = 24;
FisoParser.FALSE = 25;
FisoParser.ID = 26;
FisoParser.BLANKS = 27;
FisoParser.RULE_program = 0;
FisoParser.RULE_statement = 1;
FisoParser.RULE_print = 2;
FisoParser.RULE_declaration = 3;
FisoParser.RULE_assignment = 4;
FisoParser.RULE_condition = 5;
FisoParser.RULE_expression = 6;
FisoParser.RULE_ifelse = 7;
FisoParser.RULE_ifblock = 8;
FisoParser.RULE_elseifblock = 9;
FisoParser.RULE_elseblock = 10;
FisoParser.RULE_while = 11;
FisoParser.RULE_boolean = 12;
FisoParser.RULE_lo = 13;
// tslint:disable:no-trailing-whitespace
FisoParser.ruleNames = [
    "program", "statement", "print", "declaration", "assignment", "condition",
    "expression", "ifelse", "ifblock", "elseifblock", "elseblock", "while",
    "boolean", "lo",
];
FisoParser._LITERAL_NAMES = [
    undefined, "'('", "')'", "'{'", "'}'", "'*'", "'/'", "'+'", "'-'", "'>'",
    "'<'", "'>='", "'<='", "'&&'", "'||'", "'=='", "'!='", "'var'", "'print'",
    "'if'", "'else'", "'while'", "'='", undefined, "'true'", "'false'",
];
FisoParser._SYMBOLIC_NAMES = [
    undefined, "LP", "RP", "LCB", "RCB", "MUL", "DIV", "ADD", "SUB", "GREATHER",
    "LESSER", "GREATEQUAL", "LESSEQUAL", "AND", "OR", "EQUAL", "DIFFERENT",
    "VAR", "PRINT", "IF", "ELSE", "WHILE", "ASSIGN", "NUMBER", "TRUE", "FALSE",
    "ID", "BLANKS",
];
FisoParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(FisoParser._LITERAL_NAMES, FisoParser._SYMBOLIC_NAMES, []);
FisoParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D\xA1\x04\x02" +
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
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_program; }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    print() {
        return this.tryGetRuleContext(0, PrintContext);
    }
    ifelse() {
        return this.tryGetRuleContext(0, IfelseContext);
    }
    while() {
        return this.tryGetRuleContext(0, WhileContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_statement; }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class PrintContext extends ParserRuleContext_1.ParserRuleContext {
    PRINT() { return this.getToken(FisoParser.PRINT, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    condition() {
        return this.tryGetRuleContext(0, ConditionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_print; }
    // @Override
    accept(visitor) {
        if (visitor.visitPrint) {
            return visitor.visitPrint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrintContext = PrintContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    VAR() { return this.getToken(FisoParser.VAR, 0); }
    ID() { return this.getToken(FisoParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_declaration; }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    ID() { return this.getToken(FisoParser.ID, 0); }
    ASSIGN() { return this.getToken(FisoParser.ASSIGN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    condition() {
        return this.tryGetRuleContext(0, ConditionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_assignment; }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_condition; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ConditionContext = ConditionContext;
class ConditionConditionContext extends ConditionContext {
    condition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionContext);
        }
        else {
            return this.getRuleContext(i, ConditionContext);
        }
    }
    lo() {
        return this.getRuleContext(0, LoContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditionCondition) {
            return visitor.visitConditionCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionConditionContext = ConditionConditionContext;
class ExpressionConditionContext extends ConditionContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    lo() {
        return this.getRuleContext(0, LoContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionCondition) {
            return visitor.visitExpressionCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionConditionContext = ExpressionConditionContext;
class ParenthesisConditionContext extends ConditionContext {
    LP() { return this.getToken(FisoParser.LP, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    RP() { return this.getToken(FisoParser.RP, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesisCondition) {
            return visitor.visitParenthesisCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesisConditionContext = ParenthesisConditionContext;
class BooleanConditionContext extends ConditionContext {
    boolean() {
        return this.getRuleContext(0, BooleanContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanCondition) {
            return visitor.visitBooleanCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanConditionContext = BooleanConditionContext;
class NumberConditionContext extends ConditionContext {
    NUMBER() { return this.getToken(FisoParser.NUMBER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumberCondition) {
            return visitor.visitNumberCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberConditionContext = NumberConditionContext;
class IdConditionContext extends ConditionContext {
    ID() { return this.getToken(FisoParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdCondition) {
            return visitor.visitIdCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdConditionContext = IdConditionContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionContext = ExpressionContext;
class SubExpressionContext extends ExpressionContext {
    SUB() { return this.getToken(FisoParser.SUB, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubExpression) {
            return visitor.visitSubExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubExpressionContext = SubExpressionContext;
class MuldivExpressionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    MUL() { return this.tryGetToken(FisoParser.MUL, 0); }
    DIV() { return this.tryGetToken(FisoParser.DIV, 0); }
    // @Override
    accept(visitor) {
        if (visitor.visitMuldivExpression) {
            return visitor.visitMuldivExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MuldivExpressionContext = MuldivExpressionContext;
class AddsubExpressionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    ADD() { return this.tryGetToken(FisoParser.ADD, 0); }
    SUB() { return this.tryGetToken(FisoParser.SUB, 0); }
    // @Override
    accept(visitor) {
        if (visitor.visitAddsubExpression) {
            return visitor.visitAddsubExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AddsubExpressionContext = AddsubExpressionContext;
class ParenthesisExpressionContext extends ExpressionContext {
    LP() { return this.getToken(FisoParser.LP, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RP() { return this.getToken(FisoParser.RP, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesisExpression) {
            return visitor.visitParenthesisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesisExpressionContext = ParenthesisExpressionContext;
class NumberExpressionContext extends ExpressionContext {
    NUMBER() { return this.getToken(FisoParser.NUMBER, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumberExpression) {
            return visitor.visitNumberExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberExpressionContext = NumberExpressionContext;
class IdExpressionContext extends ExpressionContext {
    ID() { return this.getToken(FisoParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdExpression) {
            return visitor.visitIdExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdExpressionContext = IdExpressionContext;
class IfelseContext extends ParserRuleContext_1.ParserRuleContext {
    ifblock() {
        return this.getRuleContext(0, IfblockContext);
    }
    elseifblock(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElseifblockContext);
        }
        else {
            return this.getRuleContext(i, ElseifblockContext);
        }
    }
    elseblock() {
        return this.tryGetRuleContext(0, ElseblockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_ifelse; }
    // @Override
    accept(visitor) {
        if (visitor.visitIfelse) {
            return visitor.visitIfelse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfelseContext = IfelseContext;
class IfblockContext extends ParserRuleContext_1.ParserRuleContext {
    IF() { return this.getToken(FisoParser.IF, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    LCB() { return this.getToken(FisoParser.LCB, 0); }
    RCB() { return this.getToken(FisoParser.RCB, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_ifblock; }
    // @Override
    accept(visitor) {
        if (visitor.visitIfblock) {
            return visitor.visitIfblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfblockContext = IfblockContext;
class ElseifblockContext extends ParserRuleContext_1.ParserRuleContext {
    ELSE() { return this.getToken(FisoParser.ELSE, 0); }
    IF() { return this.getToken(FisoParser.IF, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    LCB() { return this.getToken(FisoParser.LCB, 0); }
    RCB() { return this.getToken(FisoParser.RCB, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_elseifblock; }
    // @Override
    accept(visitor) {
        if (visitor.visitElseifblock) {
            return visitor.visitElseifblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElseifblockContext = ElseifblockContext;
class ElseblockContext extends ParserRuleContext_1.ParserRuleContext {
    ELSE() { return this.getToken(FisoParser.ELSE, 0); }
    LCB() { return this.getToken(FisoParser.LCB, 0); }
    RCB() { return this.getToken(FisoParser.RCB, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_elseblock; }
    // @Override
    accept(visitor) {
        if (visitor.visitElseblock) {
            return visitor.visitElseblock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElseblockContext = ElseblockContext;
class WhileContext extends ParserRuleContext_1.ParserRuleContext {
    WHILE() { return this.getToken(FisoParser.WHILE, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    LCB() { return this.getToken(FisoParser.LCB, 0); }
    RCB() { return this.getToken(FisoParser.RCB, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_while; }
    // @Override
    accept(visitor) {
        if (visitor.visitWhile) {
            return visitor.visitWhile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhileContext = WhileContext;
class BooleanContext extends ParserRuleContext_1.ParserRuleContext {
    TRUE() { return this.tryGetToken(FisoParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(FisoParser.FALSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_boolean; }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanContext = BooleanContext;
class LoContext extends ParserRuleContext_1.ParserRuleContext {
    GREATHER() { return this.tryGetToken(FisoParser.GREATHER, 0); }
    LESSER() { return this.tryGetToken(FisoParser.LESSER, 0); }
    GREATEQUAL() { return this.tryGetToken(FisoParser.GREATEQUAL, 0); }
    LESSEQUAL() { return this.tryGetToken(FisoParser.LESSEQUAL, 0); }
    AND() { return this.tryGetToken(FisoParser.AND, 0); }
    OR() { return this.tryGetToken(FisoParser.OR, 0); }
    EQUAL() { return this.tryGetToken(FisoParser.EQUAL, 0); }
    DIFFERENT() { return this.tryGetToken(FisoParser.DIFFERENT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return FisoParser.RULE_lo; }
    // @Override
    accept(visitor) {
        if (visitor.visitLo) {
            return visitor.visitLo(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LoContext = LoContext;
