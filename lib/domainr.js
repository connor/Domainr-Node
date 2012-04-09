var request = require("request")


exports.search = function(query, callback) {

	request("http://domai.nr/api/json/search?q=" + query, function(err, response, body) {
		if (callback) {
			callback( JSON.parse(body) )
		} else {
			return JSON.parse(body);
		}
	})

}

exports.info = function(query, callback) {
	
	request("http://domai.nr/api/json/info?q=" + query, function(err, response, body) {
		if (callback) {
			callback( JSON.parse(body) )
		} else {
			return JSON.parse(body);
		}
	})

}