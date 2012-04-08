The Domai.nr module is a dead-simple way to utilize Domai.nr's [JSON API](http://domai.nr/api/docs/json). It only comes with two methods: `search` and `info`, but that's all we need to get a ton of work done with the data behind Domai.nr.

## Examples


##### Express

I prefer making my express apps driven by an internal API. By that, I mean I like to set up back-end routes that my front-end routes can receive data from. Included in the `/example` directory is a very rudimentary example of how one would go about using the doaminr module.


## Installation

	$ npm install domainr


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