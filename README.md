# Desafio QA TOTVS

## Instalando dependências do projeto

```
npm i
```

## Rodando o projeto

Para executar via navegador web
```
./node_modules/.bin/cypress open ou npx cypress open
```

Para executar via linha de comando 
```
npx cypress run
```



## Cenários de Testes

### CT01 - Criação de conta na plataforma Totvs Store
Contexto:
Eu como um novo usuário-cliente na plataforma Totvs Store, desejo realizar um cadastro.

    DADO que eu esteja na tela home
    E clique em "Criar Conta"
    E preecha o campo de documento com CPF ou CNPJ
    E valide um número de celular no campo de validação
    E preencha os campos dos dados cadastrais nas telas seguintes
    QUANDO clicar no botão de "Criar Conta"
    ENTÃO verei a mensagem: "Obrigado por registrar-se com TOTVS Store.".

### CT02 - Login na plataforma Totvs Store
Contexto:
Eu como um usuário-cliente que acabei de criar a minha conta na plataforma Totvs Store, desejo realizar um login.

    DADO que eu esteja na tela home
    E clique em "ENTRAR"
    E preencha o meu E-mail
    E preencha a minha Senha
    QUANDO eu clicar em Entrar
    ENTÃO serei redirecionado para a tela Home logado na minha conta


### CT03 - Pesquisar por um produto qualquer
Contexto:
Eu como um usuário-cliente já autenticado na plataforma Totvs Store, desejo realizar a busca de um produto.

    DADO que eu esteja na tela home
    E acesse a barra de pesquisa no topo da página
    E escreva o nome do meu produto desejado
    QUANDO clicar no icone da lupa a direita
    ENTÃO será exibido o resultado da minha pesquisa.


### CT04 - Acessar o produto na tela Home e adicionar ao carrinho
Contexto:
Eu como um usuário-cliente já autenticado na plataforma Totvs Store, desejo acessar o produto "Daniel" e coloca-lo no carrinho e aumentar a quantidade.

    DADO que esteja na tela home
    E clique no produto "Daniel" dentro de "Treinamentos em destaque"
    E clique em "Adicionar ao Carrinho"
    E aumente a quantidade do produto
    QUANDO eu clicar em "Atualizar Carrinho"
    Então eu verei que seu valor total será atualizado conforme a quantidade de itens.


### CT05 - Acessar o produto na tela de descrição e validar suas informações no carrinho
Contexto:
Eu como um usuario-ADM da plataforma Totvs Store, desejo acessar o produto "Daniel" e verificar se suas informações de Nome e Valor estão corretas no carrinho.

    DADO que eu esteja na tela home
    E clique no produto "Daniel"
    E valide o seu nome
    E valide o seu valor
    QUANDO eu clicar em "Adicionar ao Carrinho"
    ENTÃO validarei que as informações do produto na tela de checkout são iguais a da tela de descrição do produto.