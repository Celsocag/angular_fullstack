# Angular Fullstack

Projeto Full‑Stack com Angular (frontend) + Spring Boot/Node.js (backend), para construir uma aplicação CRUD completa.


---

## 🎯 Objetivos

- Construir uma aplicação CRUD completa (Create, Read, Update, Delete).
- Arquitetura separada: frontend em Angular e backend em API REST (Spring Boot ou Node.js).
- Aprender integração de componentes, serviços, rotas e chamadas HTTP no Angular.
- Entender como criar APIs com rotas claras, modelos de dados, controllers e serviços no backend.


---

## 🚀 Tecnologias

- **Frontend:** Angular, TypeScript, RxJS, Angular CLI, Bootstrap/Material.
- **Backend:** Spring Boot (Java) ou Node.js + Express.
- **Banco de Dados:** MySQL, MongoDB ou outro.
- **Ferramentas:** Postman, Git, Maven/Gradle, Nodemon.

---

## 🛠️ Como rodar localmente

### 1. Clone o repositório

git clone https://github.com/Celsocag/angular_fullstack.git
cd angular_fullstack


### 2. Backend

Spring Boot:

cd backend
mvn install
mvn spring-boot:run


Node.js:
cd backend
npm install
npm run dev


### 3. Frontend
cd ../frontend
npm install
ng serve


Backend: http://localhost:8080 (Spring Boot) ou 3000 (Node.js)

Frontend: http://localhost:4200

## 🧩 Recursos Implementados
CRUD completo:
Listar itens

Mostrar detalhes

Adicionar novo item

Editar item existente

Excluir itens

Features Angular:
Componentes reutilizáveis

Serviços HTTP

Roteamento de páginas

Formulários reativos ou template-driven

Estilização com Bootstrap/Material

API REST:
Controllers com rotas (GET, POST, PUT, DELETE)

Modelos (entities ou schemas)

Camada de serviço formal

Conexão com banco de dados (JPA/Hibernate ou ODM)

## 🔧 Configurações
Banco de dados
Spring Boot: configure application.properties com dados do MySQL.

Node.js: .env com endereço do banco (ex: MongoDB URI).

Proxy Angular (opcional)
No frontend/src/proxy.conf.json:

json

{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false
  }
}

E altere no angular.json em serve > options > proxyConfig.

