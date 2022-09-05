# VUE.JS CRUD

CRUD de clientes utlizando Vue.js no front-end e Node.js com MongoDB no back-end. -  teste qualicorp

## Instalação

Necessário ter instalado o [**MongoDB**](https://www.mongodb.com/try/download/community "**MongoDB**") e [**Node.js**](https://nodejs.org/en/download/ "**Node.js**") na sua máquina.

```bash
# Clone o repositório
$ git clone https://github.com/andreopvh22/vuejs-crud.git
# Entre na pasta do projeto
$ cd vuejs-crud
# Instale as dependências do projeto
$ npm install
# Entre na pasta do front-end
$ cd client
# Instale as dependências do front-end
$ npm install
# Execute o front-end
$ npm run serve
# Volte para a raiz do projeto (vuejs-crud)
$ cd ..
# Execute o back-end
$ npm run dev
```

Agora temos o front-end rodando na porta 8080, e a API REST na porta 3000.

## Funcionalidades

- Cadastrar novos clientes com cpf, nome, e-mail e telefone; **(CREATE)**
- Listar todos os clientes da aplicação em uma tabela na página inicial, tabela essa com as seguintes informações: **(READ)**
  - Usuario ID (ObjectId único do usuário no MongoDB);
  - Cpf;
  - Nome;
  - E-mail;
  - Telefone;
- Editar informações de um cliente já cadastrado; **(UPDATE)**
- Remover um cliente da aplicação; **(DELETE)**

## Como funciona

Nesse projeto, é realiza a divisão entre o front-end e back-end, de modo que ambos iniciem em endereços/portas diferentes.

### API REST

No back-end, é onde temos a nossa API e banco de dados, desenvolvidos em Node.js e MongoDB, rodando na porta 3000. Todas as rotas de *GET*, *POST*, *PUT* e *DELETE* podem ser localizadas no diretório `server>routes>api>clients.js`, elas correspondem à rota http `/api/clients` da aplicação (http://localhost:3000/api/clients). A conexão com o banco de dados é feita no diretório `server>database>db.js`, nesse arquivo também temos as funções do CRUD sendo exportadas para serem usadas nas rotas da API.

### Front-end

O front-end, nosso "client", foi desenvolvido totalmente com Vue.js - framework JavaScript -, este rodando na porta 8080 (http://localhost:8080). 

Essa aplicação Vue, é composta por 4 componentes:

- `<Header />`: Cabeçalho com título e "painel de navegação" da aplicação;
- `<ClientRegisterForm />`: Modal com o formulário para cadastro de um novo cliente;
- `<ClientEditForm />`: Modal com o formulário para editar e enviar as alterações do cliente;
- `<ClientTable />`: Tabela com toda a listagem dos clientes cadastrados no sistema.

Esses componentes são todos renderizados no `App.vue`.

O framework Bootstrap, foi usado para fazer a resposividade e estilização de alguns elementos da aplicação. Os modais, de cadastro e edição, foram estilizados com CSS puro.

