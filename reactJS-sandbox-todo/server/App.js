//const
const express = require('express');
const app = express;
const PORT = 5000;

//endpoints
app.get('/', (req, res) => {
  console.log("asdadasdasda")
  res.send('Server res')
})

app.listen(PORT, ()=> {
  console.log(PORT);
})

