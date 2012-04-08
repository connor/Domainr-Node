var request = require("request")


// TODO: catch errors from 0 params
exports.search = function(query, callback) {

	request("http://domai.nr/api/json/search?q=" + query, function(err, response, body) {
		if (callback) {
			callback( JSON.parse(body) )
		} else {
			return JSON.parse(body);
		}
	})

}

// TODO: catch errors from 0 params
exports.info = function(query, callback) {
	
	request("http://domai.nr/api/json/info?q=" + query, function(err, response, body) {
		if (callback) {
			callback( JSON.parse(body) )
		} else {
			return JSON.parse(body);
		}
	})

}