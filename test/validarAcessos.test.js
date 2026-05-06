import { realizarLogin } from '../src/validarAcessos.js'
import assert from 'node:assert';


//Testes:
//Escreva 4 testes: 
// 1) Sucesso,
// 2) Credencial expirada, 
// 3) Usuario não encontrado e 
// 4) Senha incorreta para o usuário encontrado.

describe('Testes de acesso dos usuários ao site', function () {
    // 1) Sucesso
    it('Validar acesso com login e senha válidos', function () {
        //Arrange -> O que eu preciso para testar a função?
        const email = 'marcos@gmail.com';
        const senha = '123a';
        const resultadoEsperado = 'Login realizado com sucesso!';

        //Act -> 
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, resultadoEsperado);

    });

    // 2) Credencial expirada
    it('Validar se o login está expirado', function () {
        //Arrange -> O que eu preciso para testar a função?
        const email = 'julio@gmail.com';
        const senha = '1234a';
        const resultadoEsperado = 'Suas credenciais expiraram! É necessário renova-las.';

        //Act -> 
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, resultadoEsperado);

    });

    // 3) Usuario não encontrado
    it('Validar usuário não encontrado', function () {
        //Arrange -> O que eu preciso para testar a função?
        const email = 'oiluj';
        const senha = '1234a';
        const resultadoEsperado = 'Usuário não encontrado.';

        //Act -> 
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, resultadoEsperado);

    });

    // 4) Senha incorreta para o usuário encontrado.
    it('Validar senha incorreta para usuário correto', function () {
        //Arrange -> O que eu preciso para testar a função?
        const email = 'joao@gmail.com';
        const senha = '1234567a';
        const resultadoEsperado = 'Senha incorreta para o usuário encontrado!';

        //Act ->
        const retornoDaFuncao = realizarLogin(email, senha);

        //Assert
        assert.equal(retornoDaFuncao, resultadoEsperado);

    });

});
