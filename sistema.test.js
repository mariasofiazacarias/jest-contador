const sistema = require('./sistemas');

describe('verificar a maioridade', () => {
test('verificar as idades de 15, 18  e 21 anos', () => {
    expect(sistema.verificarMaioridade(15)).toBe(false);
    expect(sistema.verificarMaioridade(18)).toBe(true);
    expect(sistema.verificarMaioridade(21)).toBe(true);
});
});


describe('calcular o IMC', () => {
test('calcular o IMC de 70 e 1.75m', () => {
    expect(sistema.calcularIMC(70, 1.75)). toBeCloseTo(22.86);
});
});

describe('testar o nome', () => {
test('Deve testar se"Lucas" e "Silva" retorna "Silva, Lucas"', () => {
    expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
});
});

 describe('testar se o número é par', () => {
test('Teste um número par, um ímpar e o número 0.', () => {
    expect(sistema.ehPar(4)).toBe(true);
    expect(sistema.ehPar(3)).toBe(false);
    expect(sistema.ehPar(0)).toBe(true);
});
 })

 describe('testar a conversão de Celsius para Fahrenheit', () => {
test('Testar a conversão de 0, 100 e -40 graus Celsius para Fahrenheit', () => {
    expect(sistema.celsiusParaFahrenheit(0)).toBeCloseTo(32);
    expect(sistema.celsiusParaFahrenheit(100)).toBeCloseTo(212);
    expect(sistema.celsiusParaFahrenheit(-40)).toBeCloseTo(-40);
});
 })

 describe('testar a adição de um hobby a uma lista', () => {
test(' testar se o array aumenta de tamanho e se contém o novo', () => {
    const lista = ['futebol', 'leitura'];
    const hobby = 'música';
    expect(sistema.adicionarHobby(lista, hobby)).toEqual(['futebol', 'leitura', 'música']);
});
 })

 describe('testar a divisão de dois números', () => {
test('Testar uma divisão normal e valide se o erro é lançado ao dividir por zero', () => {
    expect(sistema.dividir(10, 2)).toBe(5);
    expect((() => sistema.dividir(10, 0))).toThrow('Divisão por zero não permitida');
});
 })
 describe('testar a criação de um aluno', () => {
test('Valide a estrutura e dados do objeto retornado usando toEqual', () => {
    expect(sistema.criarAluno('Lucas', 'Engenharia')).toEqual({ nome: 'Lucas', curso: 'Engenharia', ativo: true });
});
 })

    describe('testar a aplicação de desconto', () => {
test('Testar descontos de 10% e 0%', () => {
    expect(sistema.aplicarDesconto(100, 10)).toBeCloseTo(90);
});
    })

    describe('testar a validação do tamanho da senha', () => {
test('Testar senhas com 5 e 8 caracteres.', () => {
    expect(sistema.validarTamanhoSenha('12345678')).toBe(true);
    expect(sistema.validarTamanhoSenha('12345')).toBe(false);
});
    })

   