var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 7000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  
  response.send('Hello World! from ' + process.env.MyServerName );
})


app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})