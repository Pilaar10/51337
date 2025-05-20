// index.mjs
import antlr4 from 'antlr4';
import SubCLexer from './generated/SubCLexer.js';
import SubCParser from './generated/SubCParser.js';
import { SubCInterpreter } from './SubCInterpreter.js'; // Importa tu intérprete
import fs from 'node:fs/promises';

class SubCErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`Error de sintaxis en la línea ${line}, columna ${column}: ${msg}`);
    }
}

async function main() {
    try {
        const inputFile = 'input.txt';
        const input = await fs.readFile(inputFile, 'utf-8');
        const chars = new antlr4.InputStream(input);
        const lexer = new SubCLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new SubCParser(tokens);

        const errorListener = new SubCErrorListener();
        parser.addErrorListener(errorListener);

        const tree = parser.programa();

        console.log("\nÁrbol de Sintaxis Abstracta (AST):");
        console.log(tree.toStringTree(parser.ruleNames));

        // Generar la tabla de lexemas-tokens (enfoque simplificado)
        console.log("\nTabla de Lexemas-Tokens (Simplificado):");
        const lexemaTokenTable = [];
        const tokenNames = {};
        for (const name in SubCLexer) {
            if (typeof SubCLexer[name] === 'number') {
                tokenNames[SubCLexer[name]] = name;
            }
        }
        for (let i = 0; i < tokens.getNumberOfOnChannelTokens(); i++) {
            const token = tokens.get(i);
            const lexema = token.text;
            const tipoToken = tokenNames[token.type] || `<UNKNOWN:${token.type}>`;
            lexemaTokenTable.push({ lexema, tipoToken });
        }
        console.table(lexemaTokenTable);

        // Interpretar el AST
        console.log("\nInterpretación:");
        const interpreter = new SubCInterpreter();
        interpreter.visit(tree); // Inicia el recorrido del AST con el Visitor

        // Ejecutar el código JavaScript generado (ejemplo básico)
        if (interpreter.output.length > 0) {
            console.log("\nCódigo JavaScript generado:");
            interpreter.output.forEach(line => console.log(line));
            console.log("\nEjecución del código JavaScript:");
            try {
                interpreter.output.forEach(line => eval(line)); // ¡Precaución con eval!
            } catch (error) {
                console.error("Error durante la ejecución:", error);
            }
        } else {
            console.log("No se generó código ejecutable.");
        }

    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            // Los errores de reconocimiento ya se manejan con el ErrorListener personalizado
        } else {
            console.error("Ocurrió un error:", error);
        }
    }
}

main();