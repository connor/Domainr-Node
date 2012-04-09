var domainr = require('../../../lib/domainr')



exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


exports.search = function(req, res){
	var domain = req.params.domain // the domain we are searching for

	domainr.search(domain, function(data) {
		res.send(data) // send back the data to the AJAX call
	})
}