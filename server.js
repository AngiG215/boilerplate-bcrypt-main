'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require('bcrypt');

// Definimos la contraseña a ocultar y el costo (saltRounds)
const myPlaintextPassword = 'password123';
const saltRounds = 12;

// Generamos el hash
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Tu hash generado es: ' + hash);
    // Aquí es donde normalmente guardarías el 'hash' en tu base de datos
  }
});
//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
