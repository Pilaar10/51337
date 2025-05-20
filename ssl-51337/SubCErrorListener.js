// SubCErrorListener.js
import antlr4 from 'antlr4';

export default class SubCErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`\n*** Error de sintaxis ***`);
        console.error(`Línea: ${line}, Columna: ${column}`);
        console.error(`Mensaje: ${msg}`);
    }
}