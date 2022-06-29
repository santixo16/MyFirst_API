/* Creating a new object called User with 4 methods. */
const User = {
    get: (req, res) => {
        res.status(200).send('este es un chanchito')
    },
    list: (req, res) => {
        res.status(200).send('Hola chanchito!')
    },
    create: (req, res) => {
        res.status(201).send('Creando un chanchito')
    },
    update: (req, res) => {
        res.status(204).send('actualizando chanchito')
    },
    destroy: (req, res) => {
        res.status(204).send('eliminando chanchito :(')
    }
}

/* Exporting the object User so that it can be used in other files. */
module.exports = User