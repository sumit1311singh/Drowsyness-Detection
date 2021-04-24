function detect_faces(){

	document.getElementById("detect").value = "Hang on..."
	var python = require("python-shell")
	var path = require("path")

	var options = {
		scriptPath : path.join(_dirname, '/../engine/')
	}

	var face = new python("face.py", options);

	face.end(function(err, code, message) {
		document.getElementById("detect").value = "Detect faces";
	})

}