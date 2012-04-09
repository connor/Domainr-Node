The Domai.nr module is a dead-simple way to utilize Domai.nr's [JSON API](http://domai.nr/api/docs/json). It only comes with two methods: `search` and `info`, but that's all we need to get a ton of work done with the data behind Domai.nr.


## Installation

	$ npm install Domai.nr


## Documentation

Like previously mentioned, this module comes with two methods available: `search`, and `info`. Both of them take two arguments: a **query** and a **callback** (which aliases the parameter you pass into it as the data that's returned from Domai.nr, so you can do whatever you want with it).

##### .search(query, callback)

The `.search` method abstracts Domainr's own [search](http://domai.nr/api/docs/json#search-api) endpoint. The response will be a JSON object, like so:

	{
	    "query": "domai.nr",
	    "results": [{
	      "domain": "domai.nr",
	      "register_url": "http://domai.nr/domai.nr/register",
	      "host": "",
	      "path": "",
	      "subdomain": "domai.nr",
	      "availability": "taken"
	    },
	    {
	      "domain": "dom.ai",
	      "register_url": "http://domai.nr/dom.ai/register",
	      "host": "",
	      "path": "/nr",
	      "subdomain": "dom.ai",
	      "availability": "available"
	    },
	    {
	      "domain": "doma.in",
	      "register_url": "http://domai.nr/doma.in/register",
	      "host": "",
	      "path": "/r",
	      "subdomain": "doma.in",
	      "availability": "taken"
	    },
	    {
	      "domain": "do.ma",
	      "register_url": "http://domai.nr/do.ma/register",
	      "host": "",
	      "path": "/i.nr",
	      "subdomain": "do.ma",
	      "availability": "maybe"
	    },
	    {
	      "domain": "d.om",
	      "register_url": "http://domai.nr/d.om/register",
	      "host": "",
	      "path": "/ai.nr",
	      "subdomain": "d.om",
	      "availability": "unavailable"
	    },
	    {
	      "domain": "do",
	      "register_url": "http://domai.nr/do/register",
	      "host": "",
	      "path": "/mai.nr",
	      "subdomain": "do",
	      "availability": "tld"
	    }]
	}


To use `.search()`, it's very simple:

```js
var domainr = require('domainr')

domainr.search("google.com", function(responseFromDomainr) {
	// the responseFromDomainr is the JSON object mentioned above
})
```

##### .info(query, callback)

The `.info` method is called in the exact same way. It's an abstraction from Domainr's own [Info](http://domai.nr/api/docs/json#info-api) endpoint.

The difference between `.info()` and `.search()` is the JSON response: it is information about the domain you pass in. See an example below:

	{
	  "domain": "domai.nr",
	  "whois_url": "http://domai.nr/domai.nr/whois",
	  "register_url": "http://domai.nr/domai.nr/register",
	  "tld": {
	    "domain": "nr",
	    "domain_idna": "nr",
	    "wikipedia_url": "http://wikipedia.org/wiki/.nr",
	    "iana_url": "http://www.iana.org/domains/root/db/nr.html"
	  },
	  "registrars": [{
	    "registrar": "cenpac.net.nr",
	    "name": "CenpacNET",
	    "register_url": "http://domai.nr/domai.nr/register/cenpac.net.nr"
	  }],
	  "host": "",
	  "path": "",
	  "www_url": "http://domai.nr/domai.nr/www",
	  "query": "domai.nr",
	  "subdomain": "domai.nr",
	  "domain_idna": "domai.nr",
	  "availability": "taken"
	}

To use `.info()`, it's very simple:

```js
var domainr = require('domainr')

domainr.info("cnnr.me", function(responseFromDomainr) {
	// the responseFromDomainr is the JSON object mentioned above
})
```


## Example App

I prefer making my express apps driven by an internal API. By that, I mean I like to set up back-end routes that my front-end routes can receive data from. Included in the `/example` directory is a very rudimentary example of how one would go about using the doaminr module.


## Shameless Plug

I <3 Domai.nr a ton. If you do too, you may be interested in the [chrome extension](https://chrome.google.com/webstore/detail/ckimnhkhhfcedianojdljjgpgachccpf/reviews) I wrote that brings all of the Domai.nr goodness to a little chrome extension.