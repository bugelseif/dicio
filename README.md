# Projeto 

Com a ideia de praticar inglês no cotidiano, esse projeto traz de uma forma simples algumas palavras em ingles com a tradução, definição e alguns exemplos, fazendo uma atualização a cada 10 minutos.

A página foi criada para ser utilizada como Overlay durante o cowork, ficando expostas para interação com quem tiver em conjunto.

![Tela durante o cowork na Twitch apresentando uma palavra, a sua tradução, definição e exemplos.](example.png)

## Como utilizar

Para utilizar como Overlay em lives, basta copiar o link da página e utilizar com uma entrada de navegador.

```cmd
https://bugelseif.github.io/dicio/
```

## Como contribuir
O projeto utiliza uma página `HTML` e um script em `JS`.

Os dados estão diretamente no arquivo `dicio.js`, a ideia é que a lista de palavras seja alimentada manualmente, com palavras que sejam interessantes ou apareçam no dia a dia, agregando mais ao nosso vocabulário.

### Adicionar uma palavra
Siga os passos:

- Abra uma `issue` com a palavra
- Faça um `fork` do projeto
- Acesse o arquivo `dicio.js`
- Adicione a palavra seguindo a estrutura:
    ```js
        {
            palavra: "Coloque aqui uma palavra",
            traducao:"Coloque aqui a tradução dela",
            definicao:"Coloque aqui a definição da palavra em inglês.",
            exemplos: [
                "Coloque aqui um exemplo de uso da palavra.",
                "Pode adicionar mais de um exemplo com uma nova linha"
            ]
        },
    ```
- Lembre-se de **seguir a ordem alfabetica**
- Faça um `PR` para o projeto.

### Sugestões são bem vindas

Para contribuir de outras formas, abra uma `issue` com a sugestão.
Lembre-se que é um projeto simples, evite adicionar complexidades desnecessárias para o seu propósito. 🖤