const DB_USER = 'lojadonamaria'
const DB_PASSWORD = encodeURIComponent('iPHws6kDHEuXvXYq')

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apilojadonamaria.4z1dr.mongodb.net/lojadonamaria?retryWrites=true&w=majority`)
.then(()=> { 
    console.log('Database MongoDB CONNECTED!')
    app.listen(3333)
})
.catch((err) => console.log(err))

module.exports = mongoose;