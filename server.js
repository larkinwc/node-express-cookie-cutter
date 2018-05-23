const express = require('express')
const app = express()

app.use(express.static(__dirname));


// get requests send index.html
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });
  
app.listen(3000, () => console.log('listening on port 3000!'))