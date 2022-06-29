/* Importing the express module. */
const express = require('express')
/* Importing the user.controller.js file. */
const user = require('./user.controller')
/* Creating an instance of the express module. */
const app = express()
//indicamos en qué puerto queremos ejecutar la app
const port = 3000

//le indicamos a express la ruta del navegador que tenemos que escribir para que ejecute la funcion que le vamos a pasar como segundo argumento
app.get('/', user.list)
/* Creating a new pig. */
app.post('/', user.create)
/* Telling the app to listen to the port 3000 and to print a message in the console. */
app.get('/:id', user.get)
/* Updating a pig. */
app.put('/:id', user.update)
/* Updating a pig. */
app.patch('/:id', user.update)
/* Deleting a pig. */
app.delete('/:id', user.destroy)

/* A catch all route. It will be executed if no other route is matched. */
app.get('*', (req, res) => {
  res.status(404).send('Esta página no existe')
})

/* Telling the app to listen to the port 3000 and to print a message in the console. */
app.listen(port, () => {
  console.log('Arrancando la app...')
})