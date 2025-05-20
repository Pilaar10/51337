// Generated from SubC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SubCListener from './SubCListener.js';
const serializedATN = [4,1,16,108,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,39,8,1,10,1,12,1,
42,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,74,8,7,1,8,1,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,5,10,87,8,10,10,10,12,10,90,9,10,1,
11,4,11,93,8,11,11,11,12,11,94,1,12,1,12,1,12,1,12,1,13,4,13,102,8,13,11,
13,12,13,103,1,14,1,14,1,14,0,1,2,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,0,2,1,0,13,14,1,0,13,15,98,0,30,1,0,0,0,2,33,1,0,0,0,4,43,1,0,0,0,6,45,
1,0,0,0,8,57,1,0,0,0,10,61,1,0,0,0,12,65,1,0,0,0,14,73,1,0,0,0,16,75,1,0,
0,0,18,81,1,0,0,0,20,84,1,0,0,0,22,92,1,0,0,0,24,96,1,0,0,0,26,101,1,0,0,
0,28,105,1,0,0,0,30,31,3,2,1,0,31,32,5,0,0,1,32,1,1,0,0,0,33,34,6,1,-1,0,
34,35,3,4,2,0,35,40,1,0,0,0,36,37,10,1,0,0,37,39,3,4,2,0,38,36,1,0,0,0,39,
42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,3,1,0,0,0,42,40,1,0,0,0,43,44,
3,6,3,0,44,5,1,0,0,0,45,46,5,1,0,0,46,47,5,2,0,0,47,48,3,8,4,0,48,49,5,3,
0,0,49,50,3,10,5,0,50,51,5,3,0,0,51,52,3,12,6,0,52,53,5,4,0,0,53,54,5,5,
0,0,54,55,3,14,7,0,55,56,5,6,0,0,56,7,1,0,0,0,57,58,3,20,10,0,58,59,5,7,
0,0,59,60,3,22,11,0,60,9,1,0,0,0,61,62,3,20,10,0,62,63,5,11,0,0,63,64,3,
22,11,0,64,11,1,0,0,0,65,66,3,20,10,0,66,67,5,12,0,0,67,13,1,0,0,0,68,74,
3,16,8,0,69,70,3,16,8,0,70,71,3,14,7,0,71,74,1,0,0,0,72,74,3,18,9,0,73,68,
1,0,0,0,73,69,1,0,0,0,73,72,1,0,0,0,74,15,1,0,0,0,75,76,5,8,0,0,76,77,5,
2,0,0,77,78,3,24,12,0,78,79,5,4,0,0,79,80,5,3,0,0,80,17,1,0,0,0,81,82,5,
9,0,0,82,83,5,3,0,0,83,19,1,0,0,0,84,88,5,13,0,0,85,87,7,0,0,0,86,85,1,0,
0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,21,1,0,0,0,90,88,1,0,0,
0,91,93,5,14,0,0,92,91,1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,
95,23,1,0,0,0,96,97,5,10,0,0,97,98,3,26,13,0,98,99,5,10,0,0,99,25,1,0,0,
0,100,102,3,28,14,0,101,100,1,0,0,0,102,103,1,0,0,0,103,101,1,0,0,0,103,
104,1,0,0,0,104,27,1,0,0,0,105,106,7,1,0,0,106,29,1,0,0,0,5,40,73,88,94,
103];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SubCParser extends antlr4.Parser {

    static grammarFileName = "SubC.g4";
    static literalNames = [ null, "'for'", "'('", "';'", "')'", "'{'", "'}'", 
                            "'='", "'printf'", "'break'", "'\"'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "OPERADOR_RELACIONAL", "OPERADOR_INCREMENTO", 
                             "LETRA", "DIGITO", "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "inicializacion", "condicion", "actualizacion", 
                         "sentencia", "salida", "terminar", "identificador", 
                         "numero", "cadena", "caracteres", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SubCParser.ruleNames;
        this.literalNames = SubCParser.literalNames;
        this.symbolicNames = SubCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SubCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.instrucciones(0);
	        this.state = 31;
	        this.match(SubCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, SubCParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 40;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_instrucciones);
	                this.state = 36;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 37;
	                this.instruccion(); 
	            }
	            this.state = 42;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SubCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.bucle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SubCParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(SubCParser.T__0);
	        this.state = 46;
	        this.match(SubCParser.T__1);
	        this.state = 47;
	        this.inicializacion();
	        this.state = 48;
	        this.match(SubCParser.T__2);
	        this.state = 49;
	        this.condicion();
	        this.state = 50;
	        this.match(SubCParser.T__2);
	        this.state = 51;
	        this.actualizacion();
	        this.state = 52;
	        this.match(SubCParser.T__3);
	        this.state = 53;
	        this.match(SubCParser.T__4);
	        this.state = 54;
	        this.sentencia();
	        this.state = 55;
	        this.match(SubCParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inicializacion() {
	    let localctx = new InicializacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SubCParser.RULE_inicializacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.identificador();
	        this.state = 58;
	        this.match(SubCParser.T__6);
	        this.state = 59;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SubCParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.identificador();
	        this.state = 62;
	        this.match(SubCParser.OPERADOR_RELACIONAL);
	        this.state = 63;
	        this.numero();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actualizacion() {
	    let localctx = new ActualizacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SubCParser.RULE_actualizacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.identificador();
	        this.state = 66;
	        this.match(SubCParser.OPERADOR_INCREMENTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SubCParser.RULE_sentencia);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.salida();
	            this.state = 70;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SubCParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(SubCParser.T__7);
	        this.state = 76;
	        this.match(SubCParser.T__1);
	        this.state = 77;
	        this.cadena();
	        this.state = 78;
	        this.match(SubCParser.T__3);
	        this.state = 79;
	        this.match(SubCParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SubCParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(SubCParser.T__8);
	        this.state = 82;
	        this.match(SubCParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SubCParser.RULE_identificador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(SubCParser.LETRA);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13 || _la===14) {
	            this.state = 85;
	            _la = this._input.LA(1);
	            if(!(_la===13 || _la===14)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SubCParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 91;
	            this.match(SubCParser.DIGITO);
	            this.state = 94; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SubCParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(SubCParser.T__9);
	        this.state = 97;
	        this.caracteres();
	        this.state = 98;
	        this.match(SubCParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracteres() {
	    let localctx = new CaracteresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SubCParser.RULE_caracteres);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 100;
	            this.caracter();
	            this.state = 103; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SubCParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SubCParser.EOF = antlr4.Token.EOF;
SubCParser.T__0 = 1;
SubCParser.T__1 = 2;
SubCParser.T__2 = 3;
SubCParser.T__3 = 4;
SubCParser.T__4 = 5;
SubCParser.T__5 = 6;
SubCParser.T__6 = 7;
SubCParser.T__7 = 8;
SubCParser.T__8 = 9;
SubCParser.T__9 = 10;
SubCParser.OPERADOR_RELACIONAL = 11;
SubCParser.OPERADOR_INCREMENTO = 12;
SubCParser.LETRA = 13;
SubCParser.DIGITO = 14;
SubCParser.SIMBOLO = 15;
SubCParser.WS = 16;

SubCParser.RULE_programa = 0;
SubCParser.RULE_instrucciones = 1;
SubCParser.RULE_instruccion = 2;
SubCParser.RULE_bucle = 3;
SubCParser.RULE_inicializacion = 4;
SubCParser.RULE_condicion = 5;
SubCParser.RULE_actualizacion = 6;
SubCParser.RULE_sentencia = 7;
SubCParser.RULE_salida = 8;
SubCParser.RULE_terminar = 9;
SubCParser.RULE_identificador = 10;
SubCParser.RULE_numero = 11;
SubCParser.RULE_cadena = 12;
SubCParser.RULE_caracteres = 13;
SubCParser.RULE_caracter = 14;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(SubCParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_bucle;
    }

	inicializacion() {
	    return this.getTypedRuleContext(InicializacionContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	actualizacion() {
	    return this.getTypedRuleContext(ActualizacionContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitBucle(this);
		}
	}


}



class InicializacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_inicializacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterInicializacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitInicializacion(this);
		}
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_condicion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	OPERADOR_RELACIONAL() {
	    return this.getToken(SubCParser.OPERADOR_RELACIONAL, 0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitCondicion(this);
		}
	}


}



class ActualizacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_actualizacion;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	OPERADOR_INCREMENTO() {
	    return this.getToken(SubCParser.OPERADOR_INCREMENTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterActualizacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitActualizacion(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_salida;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_identificador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SubCParser.LETRA);
	    } else {
	        return this.getToken(SubCParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SubCParser.DIGITO);
	    } else {
	        return this.getToken(SubCParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitIdentificador(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SubCParser.DIGITO);
	    } else {
	        return this.getToken(SubCParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitNumero(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_cadena;
    }

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitCadena(this);
		}
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_caracteres;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitCaracteres(this);
		}
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(SubCParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(SubCParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(SubCParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitCaracter(this);
		}
	}


}




SubCParser.ProgramaContext = ProgramaContext; 
SubCParser.InstruccionesContext = InstruccionesContext; 
SubCParser.InstruccionContext = InstruccionContext; 
SubCParser.BucleContext = BucleContext; 
SubCParser.InicializacionContext = InicializacionContext; 
SubCParser.CondicionContext = CondicionContext; 
SubCParser.ActualizacionContext = ActualizacionContext; 
SubCParser.SentenciaContext = SentenciaContext; 
SubCParser.SalidaContext = SalidaContext; 
SubCParser.TerminarContext = TerminarContext; 
SubCParser.IdentificadorContext = IdentificadorContext; 
SubCParser.NumeroContext = NumeroContext; 
SubCParser.CadenaContext = CadenaContext; 
SubCParser.CaracteresContext = CaracteresContext; 
SubCParser.CaracterContext = CaracterContext; 
