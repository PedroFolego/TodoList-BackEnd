# TodoList-BackEnd


# Contexto
API para o desenvolvimento de um aplicativo de lista de tarefas, utilizando Typescript.

Usando as camadas da aplicação (Models, Service e Controllers),
sendo possível realizar as operações que se pode fazer em um banco de dados MySQL: (CRUD)Criação, Leitura, Atualização e Exclusão.

> Para rodar o Frontend em conjunto com a API acesse: https://github.com/PedroFolego/TodoList-Frontend

## Técnologias usadas

> Desenvolvido usando: NodeJS, ExpressJS, TypeScript, MYSQL, ES6.


## Rodando com o Docker

### Criando Containers: 

```
cd TodoList-BackEnd/
docker-compose up -d
```
* Depois acesse o Terminal Interativo com `docker exec -it todolist` e instale as dependências com `npm install`
* Acesse o banco criado e crie a tabela usando o arquivo `todoSQL.sql`

## Rodando Localmente

### Instalando Dependências

```bash
cd TodoList-BackEnd/ 
npm install
``` 

### Criando o Banco de Dados

* Abra o arquivo StoreSmith.sql e crie a tabela no banco.
* (Opcional): Execute as querys para preencher o banco com valores iniciais.  

## Criando gerenciamento de ambiente

* Crie um arquivo na raiz do projeto chamado '.env' e preencha com suas variáveis de ambiente.

```
PORT=numeroDaPorta
MYSQL_HOST=host
MYSQL_USER=userSQL
MYSQL_PASSWORD=passwordSQL
```

# Executando aplicação

* Para rodar o back-end:

  ```
  npm start
  ```
