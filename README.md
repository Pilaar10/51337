
# Analizador Léxico y Sintáctico para SubC

Este repositorio contiene la implementación de un analizador léxico y sintáctico para un lenguaje de programación simplificado llamado SubC. Este proyecto fue desarrollado como parte de una tarea de SSL.

## Descripción del Proyecto

El analizador toma como entrada código fuente escrito en el lenguaje SubC y realiza las siguientes fases de análisis:

* **Análisis Léxico:** Divide el código fuente en una secuencia de tokens (lexemas) y los clasifica según su tipo (palabras clave, identificadores, operadores, etc.).
* **Análisis Sintáctico:** Analiza la secuencia de tokens para determinar si cumplen con la gramática definida para el lenguaje SubC, construyendo un Árbol de Sintaxis Abstracta (AST) que representa la estructura del programa.
* **Reporte de Errores:** En caso de encontrar errores léxicos o sintácticos en el código de entrada, el analizador reporta la ubicación (línea y columna) y una descripción del error.
* **Generación de Tabla de Lexemas-Tokens:** Se genera una tabla que muestra cada lexema reconocido y su tipo de token.
* **Generación del Árbol de Sintaxis Abstracta (AST):** Se muestra una representación textual del AST construido por el parser.
* **(Estado Actual de la Interpretación):** Actualmente, la fase de interpretación (traducción a JavaScript y ejecución) se encuentra en desarrollo y no está completamente funcional debido a problemas técnicos con la generación del Visitor de ANTLR4

## Contenido del Repositorio

* `proyecto-analizador/`: Contiene el código fuente del analizador en Node.js.
    * `index.mjs`: El punto de entrada principal de la aplicación.
    * `SubCInterpreter.js`: (Aunque no esté completamente funcional) Contiene la lógica para la interpretación del AST.
    * `generated/`: Contiene los archivos generados por ANTLR4 (lexer, parser, etc.).
* `SubC.g4`: El archivo que define la gramática del lenguaje SubC en la sintaxis de ANTLR4.
* `ejemplo_correcto1.txt`: Un archivo de ejemplo con código SubC sintácticamente correcto.
* `ejemplo_correcto2.txt`: Otro archivo de ejemplo con código SubC sintácticamente correcto.
* `ejemplo_incorrecto1.txt`: Un archivo de ejemplo con código SubC que contiene errores léxicos o sintácticos.
* `ejemplo_incorrecto2.txt`: Otro archivo de ejemplo con código SubC que contiene errores léxicos o sintácticos.
* `README.md`: Este archivo con la documentación del proyecto.

## Cómo Ejecutar el Analizador

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Pilaar10/51337
    cd <nombre_de_tu_repositorio>
    cd proyecto-analizador
    ```

2.  **Instalar las dependencias (si es necesario):**
    ```bash
    npm install antlr4
    ```

    **Nota:** Asegúrate de que el archivo de entrada (`ejemplo_correcto1.txt` o el que elijas) exista en la misma ubicación desde donde ejecutas el comando o proporciona la ruta correcta al archivo.

    La salida del analizador mostrará en la consola:
    * Cualquier error léxico o sintáctico encontrado.
    * La tabla de lexemas-tokens.
    * La representación textual del Árbol de Sintaxis Abstracta (AST).
    * (Si estuviera funcional) La salida de la fase de interpretación.

## Ejemplos de Entrada

Se incluyen cuatro archivos de ejemplo en la raíz del repositorio:

* `ejemplo_correcto1.txt`: [Describe brevemente qué hace este ejemplo correcto]
* `ejemplo_correcto2.txt`: [Describe brevemente qué hace este otro ejemplo correcto]
* `ejemplo_incorrecto1.txt`: [Describe brevemente el error que contiene este ejemplo]
* `ejemplo_incorrecto2.txt`: [Describe brevemente el error que contiene este otro ejemplo]

Podemos probar el analizador con estos archivos como entrada.
PILAR REYES LEYRIA 51337 pilarreyesleyria@gmail.com

