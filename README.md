The Domainr NPM package is a dead-simple way to utilize Domainr's [JSON API](https://github.com/domainr/api/wiki/JSON-API). It only comes with two methods: `search` and `info`, but that's all we need to get a ton of work done with the data behind Domainr.


## Installation

	$ npm install Domai.nr


## Documentation

Like previously mentioned, this package comes with two methods available: `search`, and `info`. Both of them take two arguments: a **query** and a **callback** (which aliases the parameter you pass into it as the data that's returned from Domainr, so you can do whatever you want with it).

##### .search(query, callback)

The `.search` method abstracts Domainr's own [search](https://github.com/domainr/api/wiki/JSON-API#search) endpoint. The response will be a JSON object, like so:

	{
	    "query": "domai.nr",
	    "results": [{
	      "domain": "domai.nr",
	      "register_url": "https://domainr.com/domai.nr/register",
	      "host": "",
	      "path": "",
	      "subdomain": "domai.nr",
	      "availability": "taken"
	    },
	    {
	      "domain": "dom.ai",
	      "register_url": "https://domainr.com/dom.ai/register",
	      "host": "",
	      "path": "/nr",
	      "subdomain": "dom.ai",
	      "availability": "available"
	    },
	    {
	      "domain": "doma.in",
	      "register_url": "httsp://domainr.com/doma.in/register",
	      "host": "",
	      "path": "/r",
	      "subdomain": "doma.in",
	      "availability": "taken"
	    },
	    {
	      "domain": "do.ma",
	      "register_url": "https://domainr.com/do.ma/register",
	      "host": "",
	      "path": "/i.nr",
	      "subdomain": "do.ma",
	      "availability": "maybe"
	    },
	    {
	      "domain": "d.om",
	      "register_url": "https://domainr.com/d.om/register",
	      "host": "",
	      "path": "/ai.nr",
	      "subdomain": "d.om",
	      "availability": "unavailable"
	    },
	    {
	      "domain": "do",
	      "register_url": "https://domainr.com/do/register",
	      "host": "",
	      "path": "/mai.nr",
	      "subdomain": "do",
	      "availability": "tld"
	    }]
	}


To use `.search()`, it's very simple:

```js
var domainr = require('Domai.nr')

domainr.search("google.com", function(responseFromDomainr) {
	// the responseFromDomainr is the JSON object mentioned above
})
```

##### .info(query, callback)

The `.info` method is called in the exact same way. It's an abstraction from Domainr's own [Info](https://github.com/domainr/api/wiki/JSON-API#info) endpoint.

The difference between `.info()` and `.search()` is the JSON response: it is information about the domain you pass in. See an example below:

	{
	  "domain": "domai.nr",
	  "whois_url": "https://domainr.com/domai.nr/whois",
	  "register_url": "https://domainr.com/domai.nr/register",
	  "tld": {
	    "domain": "nr",
	    "domain_idna": "nr",
	    "wikipedia_url": "http://wikipedia.org/wiki/.nr",
	    "iana_url": "http://www.iana.org/domains/root/db/nr.html"
	  },
	  "registrars": [{
	    "registrar": "cenpac.net.nr",
	    "name": "CenpacNET",
	    "register_url": "https://domainr.com/domai.nr/register/cenpac.net.nr"
	  }],
	  "host": "",
	  "path": "",
	  "www_url": "https://domainr.com/domai.nr/www",
	  "query": "domai.nr",
	  "subdomain": "domai.nr",
	  "domain_idna": "domai.nr",
	  "availability": "taken"
	}

To use `.info()`, it's very simple:

```js
var domainr = require('Domai.nr')

domainr.info("cnnr.me", function(responseFromDomainr) {
	// the responseFromDomainr is the JSON object mentioned above
})
```


## Examples

I prefer making my express apps driven by an internal API. By that, I mean I like to set up back-end routes that my front-end routes can receive data from.

I have made 2 simple apps using this package: [one using express](https://github.com/connor/Domainr-Node/tree/master/examples/express), and a [twitter bot](checkthisdomain-bot). You can see them both in the `/example` directory within this repo.


## Shameless Plug

I really like Domainr. If you do too, you may be interested in the [chrome extension](https://chrome.google.com/webstore/detail/ckimnhkhhfcedianojdljjgpgachccpf/reviews) or [twitter bot](checkthisdomain-bot) I wrote.
