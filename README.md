<p align="center">
  <img src="https://github.com/bprofiro/gobarber/blob/master/frontend/src/assets/logo.svg" />
</p>

## Sobre o Projeto

  Esse projeto foi desenvolvido durante o Bootcamp GoStack, organizado pela Rocketseat.

  O GoBarber é uma aplicação de controle de agendamentos de barbeiros que permite ao cliente da barbearia o cadastro na plataforma e a possibilidade realizar os seus agendamentos pela aplicação mobile. Para a barbearia, existe a aplicação web para, além de fazer o cadastro de usuário, o gerenciamento de seus agendamentos.

  A aplicação guarda no banco de dados os usuários criados e os seus agendamentos. Também existe um sistema de cache de agendamentos utilizando o Redis para proporcionar melhor User Experience ao diminuir o tempo das requisições.

## Tecnologias:
  O GoBarber é um aplicação complexa e, por tanto, muitas ferramentas foram utilizadas para o seu desenvolvimento. Entre elas estão:

- Node
  - PostgreSQL
  - Redis
  - MongoDB
  - Express
  - TypeORM
  - CORS
  - Date-fns
  - Jest
  - Multer
- React
  - React Icons
  - React Dom
  - React Router Dom
  - Unform
  - Yup
  - Polished
- React Native
  - React Navigation
  - React Native Vector Icons
  - Unform
- TypeScript
- Axios
- Styled-components
- Eslint
- Prettier
- EditorConfig

## Ambiente de Desenvolvimento

Para rodar essa aplicação em sua máquina, você precisará de um ambiente NodeJs básico instalado.

**Clonando o repositório:**

```
$ git clone https://github.com/bprofiro/gobarber.git
```

### Instalando:

**Back-End**

- Digite `npm install` na pasta `backend` para instalar todas as dependências;
- Digite `npm run dev:server` para rodar o servidor;

**Front-End** 

- Digite `npm install` na pasta `frontend` para instalar todas as dependências;
- Digite `npm start` para rodar o projeto;

**Mobile** 

- Digite `npm install` na pasta `mobile` para instalar todas as dependências;
- Atualize a baseURL na pasta src/services/api.js.
- Digite `expo start` para rodar o projeto.
