// SubCInterpreter.js
import antlr4 from 'antlr4';
import { SubCVisitor } from './SubCVisitor.js';

class SubCInterpreter extends SubCVisitor {
    constructor() {
        super();
        this.memory = {};
        this.output = [];
    }

    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitInstruccion(ctx) {
        return this.visitChildren(ctx);
    }

    visitBucle(ctx) {
        const inicializacion = this.visit(ctx.inicializacion());
        const condicion = this.visit(ctx.condicion());
        const actualizacion = this.visit(ctx.actualizacion());
        const bloque = this.visit(ctx.bloque());
        this.output.push(`for (${inicializacion}; ${condicion}; ${actualizacion}) ${bloque}`);
    }

    visitInicializacion(ctx) {
        const identificador = ctx.identificador().getText();
        const numero = ctx.numero().getText();
        return `${identificador} = ${numero}`;
    }

    visitCondicion(ctx) {
        const identificador = ctx.identificador().getText();
        const operador = ctx.operador_relacional().getText();
        const numero = ctx.numero().getText();
        return `${identificador} ${operador} ${numero}`;
    }

    visitActualizacion(ctx) {
        const identificador = ctx.identificador().getText();
        const operador = ctx.operador_incremento().getText();
        return `${identificador}${operador}`;
    }

    visitBloque(ctx) {
        if (ctx.instrucciones()) {
            return `{ ${this.visit(ctx.instrucciones())} }`;
        } else if (ctx.sentencia()) {
            return `{ ${this.visit(ctx.sentencia())} }`;
        }
        return '{}';
    }

    visitSentencia(ctx) {
        return this.visitChildren(ctx);
    }

    visitSalida(ctx) {
        const cadena = ctx.cadena().getText().slice(1, -1);
        this.output.push(`console.log("${cadena}");`);
    }

    visitTerminar(ctx) {
        this.output.push(`break;`);
    }

    visitIdentificador(ctx) {
        return ctx.getText();
    }

    visitNumero(ctx) {
        return ctx.getText();
    }

    visitCadena(ctx) {
        return ctx.getText();
    }
}

export { SubCInterpreter };