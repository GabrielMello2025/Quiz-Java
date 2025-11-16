const questions = {
    facil: [
        { pergunta: "Qual tipo primitivo representa números inteiros em Java?", alternativas: ["float", "String", "int", "boolean"], correta: 2 },
        { pergunta: "Qual palavra-chave é usada para criar um objeto?", alternativas: ["class", "new", "make", "create"], correta: 1 },
        { pergunta: "Como declaramos uma variável do tipo texto?", alternativas: ["text nome;", "String nome;", "char nome;", "var nome;"], correta: 1 },
        { pergunta: "Qual desses é um loop em Java?", alternativas: ["repeat", "for", "each", "select"], correta: 1 },
        { pergunta: "Qual é o operador de atribuição?", alternativas: ["==", "=", ":=", "=>"], correta: 1 },
        { pergunta: "Qual estrutura controla decisões?", alternativas: ["if/else", "switch", "while", "class"], correta: 0 },
        { pergunta: "Qual tipo guarda valores true/false?", alternativas: ["boolean", "int", "double", "bit"], correta: 0 },
        { pergunta: "Qual é a extensão de arquivos Java?", alternativas: [".jv", ".java", ".class", ".jvm"], correta: 1 },
        { pergunta: "Qual comando imprime no console?", alternativas: ["print()", "echo()", "System.out.println();", "console.log();"], correta: 2 },
        { pergunta: "O que significa JVM?", alternativas: ["Java Virtual Memory", "Java Variable Machine", "Java Virtual Machine", "Java Version Manager"], correta: 2 }
    ],

    medio: [
        { pergunta: "Qual é o modificador de acesso padrão em Java?", alternativas: ["public", "private", "protected", "nenhum (package-private)"], correta: 3 },
        { pergunta: "O que é sobrecarga de métodos?", alternativas: ["Mesmo nome, parâmetros diferentes", "Métodos herdados", "Métodos duplicados", "Métodos iguais"], correta: 0 },
        { pergunta: "Qual interface permite ordenar coleções?", alternativas: ["Serializable", "Comparator", "Iterable", "Clonable"], correta: 1 },
        { pergunta: "O que significa 'static'?", alternativas: ["Pode ser alterado", "Pertence à classe", "Nunca muda", "É constante"], correta: 1 },
        { pergunta: "Qual tipo para números decimais?", alternativas: ["int", "float", "double", "long"], correta: 2 },
        { pergunta: "O que é uma exceção?", alternativas: ["Erro de hardware", "Situação tratável no código", "Aviso", "Interrupção do SO"], correta: 1 },
        { pergunta: "Palavra-chave para herança:", alternativas: ["implement", "inherits", "extends", "use"], correta: 2 },
        { pergunta: "Classe de entrada de dados:", alternativas: ["Console", "Scanner", "Reader", "Input"], correta: 1 },
        { pergunta: "Método inicial do programa:", alternativas: ["start()", "run()", "execute()", "main()"], correta: 3 },
        { pergunta: "Função do 'break':", alternativas: ["Pausa", "Sai do loop", "Fecha JVM", "Retorna valor"], correta: 1 }
    ],

    dificil: [
        { pergunta: "Diferença entre HashMap e Hashtable?", alternativas: ["Hashtable é mais rápido", "HashMap é sincronizado", "Hashtable é sincronizada", "São iguais"], correta: 2 },
        { pergunta: "O que é polimorfismo?", alternativas: ["Criar classes sem atributos", "Múltiplas formas de comportamento", "Uma função", "Igualdade de métodos"], correta: 1 },
        { pergunta: "O que é um Stream (Java 8)?", alternativas: ["Fluxo de bytes", "Operações funcionais", "Thread", "Recursão"], correta: 1 },
        { pergunta: "Imutabilidade da String?", alternativas: ["Não pode ser alterada", "Só no heap", "Não pode imprimir", "Não funciona em loop"], correta: 0 },
        { pergunta: "Palavra-chave que impede herança:", alternativas: ["final", "static", "sealed", "block"], correta: 0 },
        { pergunta: "Complexidade de busca HashMap:", alternativas: ["O(n²)", "O(log n)", "O(n)", "O(1)"], correta: 3 },
        { pergunta: "Garbage Collector:", alternativas: ["Apaga arquivos", "Remove objetos sem referência", "Compila classes", "Libera manualmente"], correta: 1 },
        { pergunta: "Tipo de thread prioritária:", alternativas: ["daemon", "user thread", "runnable", "static"], correta: 1 },
        { pergunta: "Thread-safe é:", alternativas: ["Impossível parar", "Seguro para múltiplas threads", "Somente background", "Mais memória"], correta: 1 },
        { pergunta: "Classe abstrata:", alternativas: ["Só métodos implementados", "Não pode ser instanciada", "Igual interface", "Privada"], correta: 1 }
    ]
};
