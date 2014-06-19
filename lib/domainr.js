var request = require("request")


exports.search = function(query, callback) {

	request("https://domai.nr/api/json/search?client_id=node_connor&q=" + encodeURI(query), function(err, response, body) {
	    callback( JSON.parse(body) )
	})

}

exports.info = function(query, callback) {
	
	request("https://domai.nr/api/json/info?client_id=node_connor&q=" + query, function(err, response, body) {

		if (response.statusCode === 200) {
				callback( JSON.parse(body) )
		} else if (response.statusCode === 500) {
			throw new Error("Sorry, there was an error. Make sure " + query + " is a valid domain to look up. If it's not, and this keeps happening, post on github issues: https://github.com/connormontgomery/Domainr-Node/issues. There are some notes below you should post:\n" + JSON.stringify(response) )
		}
	})

}
