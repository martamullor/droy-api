![Droy Builder Logo](https://firebasestorage.googleapis.com/v0/b/droy-dev.appspot.com/o/public%2Fdroy_logo.png?alt=media&token=c6f641e9-d3b3-46e7-9b1a-24377b8b35df)

# API Droy

This API is developed for the [Droy](https://github.com/marcmnc7/droy) application. It allows you manage projects and their information, default components and their information and styles and their information. Coded under the MVC pattern.

## Endpoints

| Method  | Path  | Description  |
|---|---|---|
| GET  | `/projects/:id`  | Gets the details of the target project  |
| DELETE  | `/projects/:id`  | Deletes the target project  |
| PUT  | `/projects/:id`  | Updates target project  |
| GET  | `/projects/:id/deploy`  | Saves the actual saved configuration to deployed configuration  |
| GET  | `/projects/:id/:userId`  | Gets all projects for the specified user  |
| POST  | `/projects/:id/:userId`  | Creates one user project  |
| GET  | `/components`  | Gets all the components. It can be filtered with the query param `?style=stylename` |
| POST  | `/components`  | Creates one component  |
| GET  | `/styles`  | Gets all the styles  |
| POST  | `/styles`  | Creates one style  |

## Models

### Component

```javascript
{
  code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  defaultConfig: {
    type: Object,
    required: true
  },
  belongsToStyle: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    name: String,
    height: String
  },
  componentOptions: {
    type: Array,
    required: true,
    default: []
  },
  componentStyle: {
    type: Object,
    required: true,
    default: {}
  }
}

```

### Style

```javascript
{
  code: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  className: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  }
}
```

### User Project

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  style: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: String,
    required: true
  },
  componentsConfiguration: {
    type: [new Schema({
      code: {
        type: String,
        required: true,
        trim: true
      },
      info: {
        type: Object,
        required: true
      },
      componentOptions: {
        type: Array,
        required: true,
        default: []
      },
      componentUserOverrideStyle: Object
    })]
  },
  deployedConfiguration: [Object]
}
```

## ⚡️Demo 

[A demo is worth a thousand words](https://droy-prod.web.app/about)

## Contribute

Show your ❤️ and support by giving a ⭐. 
Any suggestions are welcome!

## Links

[Link to Trello](https://trello.com/b/Krfo4Qp5/droy)

[Droy](https://github.com/marcmnc7/droy)

[Droy-API](https://github.com/marcmnc7/droy-api)

[Droy-Deploy](https://github.com/marcmnc7/droy-deploy)

[Slides](https://docs.google.com/presentation/d/1uFGmgLAgxeSe85KBZDAyAb9DgJ9LqC1k4Wlm6_MQMug/edit#slide=id.p)
