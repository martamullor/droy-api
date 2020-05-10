# API Droy

* * *

## Description 

API desarrollada para la herramienta online Droy.

* * *

## User Stories

- Permite realizar las acciones de login, logout y signup. 
- Permite gestionar proyectos de usuario y su informacion. 
- Permite gestionar el resto de contenido de la aplicacion: Estilos, Componentes...

* * *

## Endpoints

| Method  | Path  | Description  | Body  |
|---|---|---|---|
| GET  | `/projects/:id`  | Consulta la informacion de un proyecto de usuario  |   |
| POST  | `/projects`  | Crea un nuevo proyecto para el usuario  | `{ currentUser, name, style, componentsConfiguration }`  |
| PUT  | `/projects/:id`  | Modifica la informacion de un proyecto de usuario  | `{ componentsConfiguration }`  |
| GET  | `/components`  | Consulta todos los componentes disponibles. Se puede filtrar el resultado con  ?style=stylename para conseguir solo los componentes especificos de un estilo. |  |
| POST  | `/components`  | Crea un nuevo componente  | `{ code, defaultConfig, belongsToStyle, image }` 
| GET  | `/styles`  | Consulta todos los estilos disponibles  |  |
| POST  | `/styles`  | Crea un nuevo estilo  | `{ code, className, name, description, image }` 
| GET  | `/auth/whoami`  | Consulta si estoy logeado y con quien  |  |
| GET  | `/auth/logout`  | Desloguea el usuario  |  |
| POST  | `/auth/login`  | Loguea un usuario  | `{ email, hashedPassword }` 
| POST  | `/auth/signup`  | Registra un usuario  | `{ email, hashedPassword, name }`

* * *

## Models

```javascript

User = {
  name: "Bob",
  email: "bob@marley.com",
  password: "····",
  userProjects: [userProjectObjectId, ...]
}

UserProject = {
  name: "My First Project",
  style: "Classic",
  componentsConfiguration: [{
    parentComponentCode: "classic-heading-1",
    componentInfo: { text1: "Hello", text2: "World"},
    ...
  }]
}

Components = {
  code: "heading-1",
  defaultConfig: { text1: "Default Hello", text2: "Default World" },
  belongsToStyle: "classic",
  image: "https://..."
}

Styles = {
  code: "classic",
  name: "Classic",
  image: "https://...",
  description: "This is the most classic style.",
  className: "classic"
}

```

## Links

[Link to Trello](https://trello.com/b/Krfo4Qp5/droy)

[Github](https://github.com/marcmnc7/droy)

[Presentación](https://docs.google.com/presentation/d/1uFGmgLAgxeSe85KBZDAyAb9DgJ9LqC1k4Wlm6_MQMug/edit#slide=id.p)

