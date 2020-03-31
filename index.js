var express = require('express');
const path = require('path');
var app = express();
const dirRoot = path.resolve(__dirname,'');
const dirPublic = path.resolve(dirRoot, "")
app.get('/',function(req,res){

  res.sendFile(path.join(dirPublic+'/index.html'));
});



// Render static react UI
app.use("/", express.static(dirPublic))

app.listen(process.env.port || 8080);