descrição: microservico de gerenciamento de usuários (get, put, delete), utilizando node.js, express.js, e Firestore

rota: /api/v1/User (http://localhost:8080/api/v1/User)


documentação da api:
-get:
    params: (userID)
    descrição: retorna os dados de um usuário especifico. 
    obs: apenas permitimos o retorno de um unico usuário por questões de segurança
-put:
    params: (email, first_name, second_name)
    descrição: cria um novo usuário no banco de dados, e retorna o objeto dele com o ID
-delete:
    params: (userID)
    descrição: deleta um usuário especifico

dependencias necessárias: nodejs v16.13.0

como executar o projeto:
    step 1 - instalar as dependencias: npm install
    step 2 - executar projeto: GOOGLE_APPLICATION_CREDENTIALS=./env/gcloud.json nodemon server.js
    obs: o projeto foi desenvolvido no MacOSX, o comando para iniciar o projeto em outro sistema pode variar
    

