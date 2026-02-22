'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt'); // 1. Importación arriba

fccTesting(app);

// 2. Variables de prueba
const myPlaintextPassword = 'password123';
const saltRounds = 12;

// --- NO TOCAR NADA ARRIBA DE ESTO ---

//START_ASYNC
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Hash generado:", hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Resultado de la comparación:', res);
      }
    });
  }
});
// Dentro de START_SYNC
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
const result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
//END_ASYNC

//START_SYNC
// (Déjalo vacío por ahora o pon la versión sync si te la piden luego)
//END_SYNC

// --- NO TOCAR NADA DEBAJO DE ESTO ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});
