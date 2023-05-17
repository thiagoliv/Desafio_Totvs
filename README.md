# Desafio QA TOTVS

## Instalando dependências do projeto

```
npm i
```

## Rodando o projeto

Para executar via navegador web
```
npx cypress open
```

Para executar via linha de comando 
```
npm run test:ci ou npx cypress run
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


## Perguntas e Respostas

1. Como você abordaria o teste de software em uma equipe ágil e qual seria o papel do
QA nesse contexto?
   R: O teste de software deve ser integrado ao processo de desenvolvimento desde o início. O QA trabalha em estreita colaboração com os desenvolvedores e outros membros da equipe para definir critérios de aceitação claros e criar testes automatizados que possam ser executados continuamente à medida que o software é desenvolvido. O papel do QA nesse contexto seria garantir a qualidade seja mantida em todas as fases do desenvolvimento, identificando e resolvendo problemas, além de fornecer feedbacks para melhorias contínuas.

2. Como você conduziria os testes de regressão em um software que está em
desenvolvimento ativo?
   R: Eu seguiria uma abordagem de automação de testes priorizando os testes mais críticos e frequentemente executados. Assim permitindo a reexecução rápida dos testes de regressão sempre que houver alterações no código. 

3. Como você avalia a eficácia dos testes exploratórios em um projeto de
desenvolvimento de software?
   R: Os testes exploratórios são valiosos pois ajudam a descobrir problemas não previstos nos cenários de teste planejados. Eu avaliaria a eficácia destes testes observando a taxa de detecção de defeitos e o feedback dos usuários.

4. Como você garantiria que um software é de alta qualidade antes de ser lançado em
Produção?
   R: Para garantir a alta qualidade de um software antes de ser lançado eu seguiria uma abordagem abrangente de teste. Isso incluiria testes funcionais, testes de desempenho, testes de segurança, testes de usabilidade e testes de compatibilidade, dependendo das necessidades do software. Além disso, seria importante ter um processo de Code Review, realizar testes de integração e testes de aceitação com os Stakeholders relevantes.

5. Como você gerencia e documenta os defeitos encontrados durante os testes de
software?
   R: A gestão e documentação de defeitos envolve registrar detalhes relevantes sobre cada defeito, como a descrição, passos de reprodução, dados de entrada, resultados esperados e reais, além de quaisquer evidencias. Os defeitos devem ser classificados de acordo com sua gravidade e prioridade, permitindo uma melhor triagem e correção.

6. Como você avalia a eficácia de um processo de testes em um projeto de
desenvolvimento de software? Quais são os principais indicadores de desempenho
que você utilizaria para isso?
   R: Para avaliar a eficácia do processo de testes, eu consideraria os seguintes indicadores de desempenho:
        Taxa de defeitos encontrados em cada fase do ciclo de vida do software.
        Cobertura de testes alcançada em relação aos requisitos especificados.
        Tempo médio.
