let {PythonShell} = require('python-shell')
var path = require("path")


function search_movie() {

  var city = document.getElementById("city").value
  
  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [city]
  }

  let pyshell = new PythonShell('search.py');

// sends a message to the Python script via stdin
pyshell.send('hello');

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});