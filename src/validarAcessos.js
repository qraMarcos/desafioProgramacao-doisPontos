/*
Desafio Valendo 2 Pontos na Nota Final | Entrega: Suba seu código no Github e entregue o link até o dia 10 de maio às 23:59:59
Orientações: Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades:
 id, nome, email, senha e expirado (boleano, pode ser true ou false). 
Adicione ao menos um dos usuarios como expirado sendo true.

Desafio:
Construa uma função de para realizar login. 
Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. 
A função deve dizer que as credenciais expiraram caso expirado for true. 
A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais
*/

// Criando vetor com informações sobre usuários do site.
const usuarios = [
    {
        id: 1,
        nome: 'Marcos',
        email: 'marcos@gmail.com',
        senha: '123a',
        expirado: false
    },
    {
        id: 2,
        nome: 'Julio',
        email: 'julio@gmail.com',
        senha: '1234a',
        expirado: true
    },
    {
        id: 3,
        nome: 'Joao',
        email: 'joao@gmail.com',
        senha: '12345a',
        expirado: false
    },
    {
        id: 4,
        nome: 'Pedro',
        email: 'pedro@gmail.com',
        senha: '123456a',
        expirado: false
    },
    {
        id: 5,
        nome: 'Jose',
        email: 'jose@gmail.com',
        senha: '1234567a',
        expirado: false
    }
];


//Construa uma função para realizar login. 
// Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. 
// A função deve dizer que as credenciais expiraram caso expirado for true. 
// A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.
export function realizarLogin(email, senha) {

    for (let i = 0; i < usuarios.length; i++) { // Passar por todos para verificar email e senha
     
        // Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso
        //  exista um usuário com email e senha iguais aos informados. 
        if (usuarios[i].email === email) { // verificar se email é igual
            if (usuarios[i].senha === senha) { // verificar se a senha é igual
                if (usuarios[i].expirado) { // verificar se está expirado
                    return 'Suas credenciais expiraram! É necessário renova-las.';
                }
                return 'Login realizado com sucesso!';
            }
            return 'Senha incorreta para o usuário encontrado!';
        }

    }
    // Qualquer outra coisa diferente é usuário não encontrado.
    return 'Usuário não encontrado.'
}
