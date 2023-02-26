docker compose -f docker-compose-sqlite.yml up

docker compose -f docker-compose-sqlite.yml down

npm init es6

## Nodemon para recarregar nossas alterações de forma automática

### 1 - Instalando como uma dependência de desenvolvimento

```sh
npm install --save-dev nodemon
```

### 2 - Configurando dentro do projeto

- Adicione um script ao arquivo `package.json` para iniciar o servidor com o Nodemon.

```json
"scripts": {
  "start": "nodemon app.js"
}
```

<!-- script deve incluir a opção `-w` (ou `--watch`) para especificar quais pastas e arquivos devem ser observados pelo Nodemon.

```json
"scripts": {
  "start": "nodemon -w src --exec node ./bin/www"
}
``` -->

### 3 - Iniciando o servidor com o Nodemon

Agora, para iniciar o servidor com o Nodemon, execute o seguinte comando no terminal:

```sh
npm start
```

https://sequelize.org/docs/v6/core-concepts/model-basics/#using-sequelizedefine
https://www.docker.com/101-tutorial/https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/
https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
https://sequelize.org/docs/v6/core-concepts/model-instances/
https://sequelize.org/
