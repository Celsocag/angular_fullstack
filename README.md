# Angular Fullstack

:contentReference[oaicite:3]{index=3}

---

## 🎯 Objetivos

- :contentReference[oaicite:4]{index=4}
- :contentReference[oaicite:5]{index=5}
- :contentReference[oaicite:6]{index=6}
- :contentReference[oaicite:7]{index=7}

---

## 📚 Estrutura

angular_fullstack/
├── backend/ # API REST (Spring Boot ou Node.js + Express)
│ ├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── Application.java / server.js
│
├── frontend/ # Aplicação Angular
│ ├── src/
│ ├── app/
│ │ ├── components/
│ │ └── services/
│ └── angular.json
│
├── README.md
└── package.json (mesmo monorepo)

yaml
Copiar
Editar

---

## 🚀 Tecnologias

- :contentReference[oaicite:8]{index=8}
- :contentReference[oaicite:9]{index=9}
- :contentReference[oaicite:10]{index=10}
- :contentReference[oaicite:11]{index=11}

---

## 🛠️ Como rodar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/Celsocag/angular_fullstack.git
cd angular_fullstack
2. Backend
Spring Boot:
bash
Copiar
Editar
cd backend
mvn install
mvn spring-boot:run
Node.js:
bash
Copiar
Editar
cd backend
npm install
npm run dev
3. Frontend
bash
Copiar
Editar
cd ../frontend
npm install
ng serve
Backend: http://localhost:8080 (Spring Boot) ou 3000 (Node.js)

Frontend: http://localhost:4200

🧩 Recursos Implementados
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

🔧 Configurações
Banco de dados
Spring Boot: configure application.properties com dados do MySQL.

Node.js: .env com endereço do banco (ex: MongoDB URI).

Proxy Angular (opcional)
No frontend/src/proxy.conf.json:

json
Copiar
Editar
{
  "/api": {
    "target": "http://localhost:8080",
    "secure": false
  }
}
E altere no angular.json em serve > options > proxyConfig.

📦 Deploy
Angular pode ser exportado como estático (ng build --prod).

Backend implantado no Heroku, AWS, DigitalOcean, etc.

Projetos full‑stack em contêineres com Docker e Docker Compose.

🎥 Base no curso
Vídeo-base: Angular + Spring Boot CRUD Full Stack Application — tutorial passo a passo cobrindo:

Criação de API Spring Boot (CRUD)

Criação de app Angular via CLI

Desenvolvimento de componentes e serviços

Integração frontend-backend

Estilização e deploy 
javaguides.net
+1
youtube.com
+1
training.uplatz.com
+1
javaguides.net
+1
javainuse.com
+1
medium.com
+1


