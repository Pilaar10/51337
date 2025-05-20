// Generated from c:/Users/DELL/ssl-51337/SubC.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SubCParser}.
 */
public interface SubCListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SubCParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(SubCParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(SubCParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(SubCParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(SubCParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(SubCParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(SubCParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#bucle}.
	 * @param ctx the parse tree
	 */
	void enterBucle(SubCParser.BucleContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#bucle}.
	 * @param ctx the parse tree
	 */
	void exitBucle(SubCParser.BucleContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#inicializacion}.
	 * @param ctx the parse tree
	 */
	void enterInicializacion(SubCParser.InicializacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#inicializacion}.
	 * @param ctx the parse tree
	 */
	void exitInicializacion(SubCParser.InicializacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(SubCParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(SubCParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#actualizacion}.
	 * @param ctx the parse tree
	 */
	void enterActualizacion(SubCParser.ActualizacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#actualizacion}.
	 * @param ctx the parse tree
	 */
	void exitActualizacion(SubCParser.ActualizacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(SubCParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(SubCParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(SubCParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(SubCParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(SubCParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(SubCParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(SubCParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(SubCParser.IdentificadorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(SubCParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(SubCParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(SubCParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(SubCParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void enterCaracteres(SubCParser.CaracteresContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void exitCaracteres(SubCParser.CaracteresContext ctx);
	/**
	 * Enter a parse tree produced by {@link SubCParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(SubCParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link SubCParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(SubCParser.CaracterContext ctx);
}