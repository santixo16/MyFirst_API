/* Importing the mongoose library. */
const mongoose = require('mongoose')

/* Connecting to the database. */
mongoose.connect('mongodb+srv://santixo:messias1234@firstcluster.u1paaiz.mongodb.net/miapp?retryWrites=true&w=majority')

/* Creating a new model called User with the properties username and edad. */
const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

/**
 * It creates a new user, saves it to the database, and then logs the saved user to the console
 */
const crear = async () => {
  const user = new User({username: 'chanchito feliz', edad: 30})
 /* Saving the user to the database. */
  const savedUser = await user.save()
  console.log(savedUser)
}

//crear()

/**
 * We're using the User model to find all the users in the database and then logging them to the
 * console
 */
const buscarTodo = async () => {
  const users = await User.find()
  console.log(users)
}

//buscarTodo()

/**
 * It finds a user with the username 'chanchito feliz' and then logs the user to the console
 */
const buscar = async () => {
  const user = await User.find({username: 'chanchito feliz'})
  console.log(user)
}

//buscar()

/**
 * It finds a user with the username 'chanchito feliz' and then logs the user to the console
 */
const buscarUno = async () => {
    const user = await User.findOne({username: 'chanchito feliz'})
    console.log(user)
}

//buscarUno()

/**
 * It finds a user with the username 'chanchito feliz', logs the user to the console, updates the
 * user's age to 30, and saves the user
 */
const actualizar = async () => {
  const user = await User.findOne({username: 'chanchito feliz'})
  console.log(user)
  user.edad = 30
  await user.save()
}

//actualizar()

/**
 * It finds a user with the username 'chanchito triste' and if it exists, it removes it
 */
const eliminar = async () => {
  const user = await User.findOne({username: 'chanchito feliz'})
  console.log(user)
  if(user){
    await user.remove()
  }
}

//eliminar()