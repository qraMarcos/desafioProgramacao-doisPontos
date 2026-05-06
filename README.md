# DesafioProgramacao-DoisPontos

Projeto desenvolvido em JavaScript para resolver um desafio acadêmico de validação de acesso de usuários, com implementação da função de login e cobertura de testes automatizados para os cenários exigidos no enunciado fornecido pelo usuário.

## Objetivo

O projeto implementa uma função responsável por validar o login de usuários a partir de um vetor com dados cadastrais, contendo `id`, `nome`, `email`, `senha` e `expirado`, além de testes automatizados que verificam os quatro comportamentos pedidos no desafio: sucesso no login, credencial expirada, usuário não encontrado e senha incorreta.

## Estrutura do projeto

```text
DESAFIOPROGRAMACAO-DOISPONTOS/
├── src/
│   └── validarAcessos.js
└── test/
    └── validarAcessos.test.js
```

A estrutura acima foi inferida a partir do `import` presente no arquivo de teste, que referencia `../src/validarAcessos.js`, indicando a separação entre código-fonte e testes.

## Regras implementadas

A função `realizarLogin(email, senha)` percorre a lista de usuários e aplica as seguintes validações, conforme o código enviado:

- Retorna `Login realizado com sucesso!` quando encontra um usuário com email e senha corretos e com credencial não expirada.
- Retorna `Suas credenciais expiraram! É necessário renova-las.` quando o email e a senha estão corretos, mas o campo `expirado` está como `true`.
- Retorna `Senha incorreta para o usuário encontrado!` quando o email existe, mas a senha informada não corresponde à senha cadastrada.
- Retorna `Usuário não encontrado.` quando nenhum usuário da lista possui o email informado.

## Testes automatizados

O arquivo `validarAcessos.test.js` utiliza `node:assert` e cobre exatamente os quatro cenários pedidos no desafio.

| Cenário testado | Entrada principal | Resultado esperado |
|---|---|---|
| Login com sucesso | `marcos@gmail.com` + `123a` | `Login realizado com sucesso!`  |
| Credencial expirada | `julio@gmail.com` + `1234a` | `Suas credenciais expiraram! É necessário renova-las.`  |
| Usuário não encontrado | `oiluj` + `1234a` | `Usuário não encontrado.`  |
| Senha incorreta | `joao@gmail.com` + `1234567a` | `Senha incorreta para o usuário encontrado!`  |

## Como executar

Como os arquivos enviados mostram uso de `export`, `import`, `describe`, `it` e `node:assert`, o projeto aparenta estar preparado para execução em ambiente Node.js com um executor de testes compatível com essa sintaxe, como Mocha ou configuração equivalente em `package.json`.

Exemplo de instalação e execução:

```bash
npm install
npm test
```

Caso o projeto ainda não tenha um `package.json`, será necessário configurá-lo com suporte a módulos ES e um comando de teste apropriado antes da execução.

## Exemplo de uso

```javascript
import { realizarLogin } from './src/validarAcessos.js';

const resultado = realizarLogin('marcos@gmail.com', '123a');
console.log(resultado);
```

Saída esperada:

```text
Login realizado com sucesso!
```

## Pontos positivos

- Separação entre implementação e testes.
- Cobertura dos quatro cenários obrigatórios do enunciado.
- Lógica simples e fácil de entender para quem está iniciando em testes e validação de regras de negócio.

## Melhorias sugeridas

Algumas evoluções podem deixar o projeto mais robusto e mais próximo de um cenário real de autenticação.

- Padronizar mensagens e nomes semânticos, por exemplo usando constantes para os textos retornados.
- Adicionar um `package.json` com script de teste documentado.
- Separar a base de usuários em outro módulo para facilitar manutenção e reaproveitamento.
- Incluir testes extras para entradas vazias, `null`, `undefined` e diferenças entre maiúsculas e minúsculas no email.
- Em um cenário real, não armazenar senhas em texto puro.

## Contexto do desafio

Segundo o enunciado incluído no próprio arquivo `validarAcessos.js`, o desafio solicitava declarar um vetor de usuários, implementar uma função de login com tratamento de credencial expirada e credenciais incorretas, e escrever quatro testes cobrindo os cenários obrigatórios.
