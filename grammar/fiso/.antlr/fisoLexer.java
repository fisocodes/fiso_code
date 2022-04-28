// Generated from c:\Users\fiso\Documents\fiso_code\grammar\fiso\fiso.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class fisoLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LP=1, RP=2, LCB=3, RCB=4, MUL=5, DIV=6, ADD=7, SUB=8, GREATHER=9, LESSER=10, 
		GREATEQUAL=11, LESSEQUAL=12, AND=13, OR=14, EQUAL=15, DIFFERENT=16, VAR=17, 
		PRINT=18, IF=19, ELSE=20, WHILE=21, ASSIGN=22, NUMBER=23, TRUE=24, FALSE=25, 
		ID=26, BLANKS=27;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LP", "RP", "LCB", "RCB", "MUL", "DIV", "ADD", "SUB", "GREATHER", "LESSER", 
			"GREATEQUAL", "LESSEQUAL", "AND", "OR", "EQUAL", "DIFFERENT", "VAR", 
			"PRINT", "IF", "ELSE", "WHILE", "ASSIGN", "NUMBER", "TRUE", "FALSE", 
			"ID", "BLANKS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'{'", "'}'", "'*'", "'/'", "'+'", "'-'", "'>'", 
			"'<'", "'>='", "'<='", "'&&'", "'||'", "'=='", "'!='", "'var'", "'print'", 
			"'if'", "'else'", "'while'", "'='", null, "'true'", "'false'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LP", "RP", "LCB", "RCB", "MUL", "DIV", "ADD", "SUB", "GREATHER", 
			"LESSER", "GREATEQUAL", "LESSEQUAL", "AND", "OR", "EQUAL", "DIFFERENT", 
			"VAR", "PRINT", "IF", "ELSE", "WHILE", "ASSIGN", "NUMBER", "TRUE", "FALSE", 
			"ID", "BLANKS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public fisoLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "fiso.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\35\u0098\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3"+
		"\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3"+
		"\r\3\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\20\3\21\3\21\3\21\3\22\3"+
		"\22\3\22\3\22\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3"+
		"\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\30\6\30{\n\30"+
		"\r\30\16\30|\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3"+
		"\33\6\33\u008b\n\33\r\33\16\33\u008c\3\33\7\33\u0090\n\33\f\33\16\33\u0093"+
		"\13\33\3\34\3\34\3\34\3\34\2\2\35\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23"+
		"\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31"+
		"\61\32\63\33\65\34\67\35\3\2\6\3\2\62;\4\2C\\c|\5\2\62;C\\c|\5\2\13\f"+
		"\17\17\"\"\2\u009a\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3"+
		"\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2"+
		"\39\3\2\2\2\5;\3\2\2\2\7=\3\2\2\2\t?\3\2\2\2\13A\3\2\2\2\rC\3\2\2\2\17"+
		"E\3\2\2\2\21G\3\2\2\2\23I\3\2\2\2\25K\3\2\2\2\27M\3\2\2\2\31P\3\2\2\2"+
		"\33S\3\2\2\2\35V\3\2\2\2\37Y\3\2\2\2!\\\3\2\2\2#_\3\2\2\2%c\3\2\2\2\'"+
		"i\3\2\2\2)l\3\2\2\2+q\3\2\2\2-w\3\2\2\2/z\3\2\2\2\61~\3\2\2\2\63\u0083"+
		"\3\2\2\2\65\u008a\3\2\2\2\67\u0094\3\2\2\29:\7*\2\2:\4\3\2\2\2;<\7+\2"+
		"\2<\6\3\2\2\2=>\7}\2\2>\b\3\2\2\2?@\7\177\2\2@\n\3\2\2\2AB\7,\2\2B\f\3"+
		"\2\2\2CD\7\61\2\2D\16\3\2\2\2EF\7-\2\2F\20\3\2\2\2GH\7/\2\2H\22\3\2\2"+
		"\2IJ\7@\2\2J\24\3\2\2\2KL\7>\2\2L\26\3\2\2\2MN\7@\2\2NO\7?\2\2O\30\3\2"+
		"\2\2PQ\7>\2\2QR\7?\2\2R\32\3\2\2\2ST\7(\2\2TU\7(\2\2U\34\3\2\2\2VW\7~"+
		"\2\2WX\7~\2\2X\36\3\2\2\2YZ\7?\2\2Z[\7?\2\2[ \3\2\2\2\\]\7#\2\2]^\7?\2"+
		"\2^\"\3\2\2\2_`\7x\2\2`a\7c\2\2ab\7t\2\2b$\3\2\2\2cd\7r\2\2de\7t\2\2e"+
		"f\7k\2\2fg\7p\2\2gh\7v\2\2h&\3\2\2\2ij\7k\2\2jk\7h\2\2k(\3\2\2\2lm\7g"+
		"\2\2mn\7n\2\2no\7u\2\2op\7g\2\2p*\3\2\2\2qr\7y\2\2rs\7j\2\2st\7k\2\2t"+
		"u\7n\2\2uv\7g\2\2v,\3\2\2\2wx\7?\2\2x.\3\2\2\2y{\t\2\2\2zy\3\2\2\2{|\3"+
		"\2\2\2|z\3\2\2\2|}\3\2\2\2}\60\3\2\2\2~\177\7v\2\2\177\u0080\7t\2\2\u0080"+
		"\u0081\7w\2\2\u0081\u0082\7g\2\2\u0082\62\3\2\2\2\u0083\u0084\7h\2\2\u0084"+
		"\u0085\7c\2\2\u0085\u0086\7n\2\2\u0086\u0087\7u\2\2\u0087\u0088\7g\2\2"+
		"\u0088\64\3\2\2\2\u0089\u008b\t\3\2\2\u008a\u0089\3\2\2\2\u008b\u008c"+
		"\3\2\2\2\u008c\u008a\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u0091\3\2\2\2\u008e"+
		"\u0090\t\4\2\2\u008f\u008e\3\2\2\2\u0090\u0093\3\2\2\2\u0091\u008f\3\2"+
		"\2\2\u0091\u0092\3\2\2\2\u0092\66\3\2\2\2\u0093\u0091\3\2\2\2\u0094\u0095"+
		"\t\5\2\2\u0095\u0096\3\2\2\2\u0096\u0097\b\34\2\2\u00978\3\2\2\2\6\2|"+
		"\u008c\u0091\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}