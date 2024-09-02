# Integración de Sistemas de Comercio Electrónico

## Descripción

Utilizar REST para conectar sistemas basados en HTTP para obtener y generar datos, y devolverlos en formato JSON.

## Estructura del Proyecto

- **`src`**: Contiene el código fuente de la aplicación.
  - **`users`**: Módulo para gestionar usuarios.
  - **`items`**: Módulo para gestionar productos.
  - **`orders`**: Módulo para gestionar pedidos.
- **`app.module`**: Configuración de la base de datos.

## Requisitos

- Node.js
- MySQL
- TypeScript
- NestJS
- TypeORM


## Instalación y ejecución

1. Clona el repositorio:
```bash
  git clone https://github.com/alejandrogamezg/rest-api-ecommerce.git
```

2. Navega al directorio del proyecto:
```bash
cd nombre-del-repositorio
```

2. Instalacion:
```bash
npm install
```
3. Inicia el servidor de desarrollo:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
## Swagger Url

```bash
http://localhost:3000/api/docs#
```

## Pruebas como Postman:

- Consulta GET de todos los usuarios.
![Consulta Get de todos los usuarios](./screenshots/get_users_POSTMAN.png)
---
- Consulta GET de todos los items del catálago.
![Consulta Get de todos los items del catálago](./screenshots/get_items_POSTMAN.png)
---
- Consulta GET de una orden creada
![Consulta Get de una orden creada](./screenshots/get_order_2_POSTMAN.png)
---


## Swagger UI Screenshots

- SWAGGER
![SWAGGER](./screenshots/SWAGGER.png)

- SCHEMAS
![SCHEMAS](./screenshots/SCHEMAS.png)

- Consulta GET API
![Consulta GET API](./screenshots/GET.png)

- Consulta POST USERS
![Consulta POST API](./screenshots/POST_USERS.png)

- Consulta GET USERS
![Consulta GET USERS](./screenshots/GET_USERS.png)

- Consulta GET USERS ID
![GET USERS ID](./screenshots/GET_USERS_ID.png)

- Consulta PATCH USERS ID
![PATCH USERS ID](./screenshots/PATCH_USERT_ID.png)

- Consulta DELETE USERS ID
![Consulta DELETE USERS ID](./screenshots/DELETE_USER_ID.png)