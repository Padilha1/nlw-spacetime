# O NLW Spacetime do Padilha 🚀

## Um projeto Rocketseat para nos levar ao próximo nível!

<br>

# 🛠🛠🛠 Em construção 🛠🛠🛠

## Índice

- <a href="Tecnologias Utilizadas"> Tecnologias </a>
- <a href="Funcionalidades"> Funcionalidades </a>
- <a href="Demonstração"> Demonstração </a>
- <a href="Como rodar o projeto ?"> Como rodar o projeto? </a>

## Tecnologias Utilizadas

- React.js
- React Native / Expo
- Tailwind
- Node.js
- Prisma
- ESlint
- SQLite
- Fastify

## Funcionalidades

- Criação de Memórias
- Login/Autenticação com Github
- [ ] Edição de Memória
- [ ] Date Picker (Escolher a data)
- [ ] Design Responsivo Web

## Demonstração

    Tela principal já logada na conta do Github

![Tela principal](frontend\public\indexSpacetime.png)

    Tela de criação de memórias

![Tela principal](frontend\public\createMemories.png)

    Tela com as memórias criadas

![Tela principal](frontend\public\pageMemories.png)

## Como rodar o projeto ?

**Aviso antes de rodar o projeto**

> No server você deverá ter um documento .env

> Nele tendo as variáveis GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET. São as variáveis necessárias para rodar localmente. Para Mobile e Frontend serão diferentes.
> ![](frontend\public\devSetting.png)

> No Frontend também deve haver uma variável ambiente .env
> chamada NEXT_PUBLIC_GITHUB_CLIENT_ID com o mesmo valor que o ID do server.

<br>

```
# Clone o repositorio
$ git clone https://github.com/Padilha1/nlw-spacetime

# Entre na pasta
$ cd nlw-spacetime

# Voce tera que entrar em cada pasta para instalar as dependencias
$ cd frontend / cd server / cd mobile
# Para cada uma ira colocar no terminal
$ npm install

# Rode primeiro em /server
$ npm run dev

# Depois va para o /frontend
$ npm run dev

```
