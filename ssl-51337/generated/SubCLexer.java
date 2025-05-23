// Generated from c:/Users/DELL/ssl-51337/SubC.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class SubCLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, OPERADOR_RELACIONAL=11, OPERADOR_INCREMENTO=12, LETRA=13, DIGITO=14, 
		SIMBOLO=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "OPERADOR_RELACIONAL", "OPERADOR_INCREMENTO", "LETRA", "DIGITO", 
			"SIMBOLO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'for'", "'('", "';'", "')'", "'{'", "'}'", "'='", "'printf'", 
			"'break'", "'\"'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "OPERADOR_RELACIONAL", 
			"OPERADOR_INCREMENTO", "LETRA", "DIGITO", "SIMBOLO", "WS"
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


	public SubCLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SubC.g4"; }

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
		"\u0004\u0000\u0010^\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t"+
		"\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0003\nJ\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003"+
		"\u000bP\b\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0004\u000fY\b\u000f\u000b\u000f\f\u000fZ\u0001\u000f\u0001"+
		"\u000f\u0000\u0000\u0010\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010\u0001\u0000\u0005\u0002"+
		"\u0000<<>>\u0002\u0000AZaz\u0001\u000009\u0004\u0000!!,.::??\u0003\u0000"+
		"\t\n\r\r  c\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0001!\u0001\u0000\u0000\u0000\u0003%\u0001\u0000\u0000\u0000\u0005\'"+
		"\u0001\u0000\u0000\u0000\u0007)\u0001\u0000\u0000\u0000\t+\u0001\u0000"+
		"\u0000\u0000\u000b-\u0001\u0000\u0000\u0000\r/\u0001\u0000\u0000\u0000"+
		"\u000f1\u0001\u0000\u0000\u0000\u00118\u0001\u0000\u0000\u0000\u0013>"+
		"\u0001\u0000\u0000\u0000\u0015I\u0001\u0000\u0000\u0000\u0017O\u0001\u0000"+
		"\u0000\u0000\u0019Q\u0001\u0000\u0000\u0000\u001bS\u0001\u0000\u0000\u0000"+
		"\u001dU\u0001\u0000\u0000\u0000\u001fX\u0001\u0000\u0000\u0000!\"\u0005"+
		"f\u0000\u0000\"#\u0005o\u0000\u0000#$\u0005r\u0000\u0000$\u0002\u0001"+
		"\u0000\u0000\u0000%&\u0005(\u0000\u0000&\u0004\u0001\u0000\u0000\u0000"+
		"\'(\u0005;\u0000\u0000(\u0006\u0001\u0000\u0000\u0000)*\u0005)\u0000\u0000"+
		"*\b\u0001\u0000\u0000\u0000+,\u0005{\u0000\u0000,\n\u0001\u0000\u0000"+
		"\u0000-.\u0005}\u0000\u0000.\f\u0001\u0000\u0000\u0000/0\u0005=\u0000"+
		"\u00000\u000e\u0001\u0000\u0000\u000012\u0005p\u0000\u000023\u0005r\u0000"+
		"\u000034\u0005i\u0000\u000045\u0005n\u0000\u000056\u0005t\u0000\u0000"+
		"67\u0005f\u0000\u00007\u0010\u0001\u0000\u0000\u000089\u0005b\u0000\u0000"+
		"9:\u0005r\u0000\u0000:;\u0005e\u0000\u0000;<\u0005a\u0000\u0000<=\u0005"+
		"k\u0000\u0000=\u0012\u0001\u0000\u0000\u0000>?\u0005\"\u0000\u0000?\u0014"+
		"\u0001\u0000\u0000\u0000@A\u0005<\u0000\u0000AJ\u0005=\u0000\u0000BC\u0005"+
		">\u0000\u0000CJ\u0005=\u0000\u0000DE\u0005=\u0000\u0000EJ\u0005=\u0000"+
		"\u0000FG\u0005!\u0000\u0000GJ\u0005=\u0000\u0000HJ\u0007\u0000\u0000\u0000"+
		"I@\u0001\u0000\u0000\u0000IB\u0001\u0000\u0000\u0000ID\u0001\u0000\u0000"+
		"\u0000IF\u0001\u0000\u0000\u0000IH\u0001\u0000\u0000\u0000J\u0016\u0001"+
		"\u0000\u0000\u0000KL\u0005+\u0000\u0000LP\u0005+\u0000\u0000MN\u0005-"+
		"\u0000\u0000NP\u0005-\u0000\u0000OK\u0001\u0000\u0000\u0000OM\u0001\u0000"+
		"\u0000\u0000P\u0018\u0001\u0000\u0000\u0000QR\u0007\u0001\u0000\u0000"+
		"R\u001a\u0001\u0000\u0000\u0000ST\u0007\u0002\u0000\u0000T\u001c\u0001"+
		"\u0000\u0000\u0000UV\u0007\u0003\u0000\u0000V\u001e\u0001\u0000\u0000"+
		"\u0000WY\u0007\u0004\u0000\u0000XW\u0001\u0000\u0000\u0000YZ\u0001\u0000"+
		"\u0000\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[\\\u0001"+
		"\u0000\u0000\u0000\\]\u0006\u000f\u0000\u0000] \u0001\u0000\u0000\u0000"+
		"\u0004\u0000IOZ\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}