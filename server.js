const express = require('express') //mengimpor component express
const app = express() //variabel app yang berisi file express
const port = 8080 // menjalankan aplikasi di port 8080

app.set('view engine','ejs'); // menggunakan view engine ejs
app.use(express.static('public')); // menggunakan express sebagai file static

app.get('/', function(req, res) { // membuat end point untuk menampilkan suatu file
    res.render('index.ejs')}); // menampikan file index,js

app.listen(port, () => console.log(`Example app listening on port 8080!`)) // menjalankan aplikasi dan menampilkan kalimat di console