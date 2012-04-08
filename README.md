The Domai.nr module is a dead-simple way to utilize Domai.nr's [JSON API](http://domai.nr/api/docs/json). It only comes with two methods: `search` and `info`, but that's all we need to get a ton of work done with the data behind Domai.nr.

## Examples


##### Express

I prefer making my express apps driven by an internal API. By that, I mean I like to set up back-end routes that my front-end routes can receive data from. Included in the `/example` directory is a very rudimentary example of how one would go about using the doaminr module.


## Installation

	$ npm install domainr


## Documentation

Like previously mentioned, this module comes with two methods available: `search`, and `info`. Both of them take two arguments: a **query** and a **callback** (which aliases the parameter you pass into it as the data that's returned from Domai.nr, so you can do whatever you want with it).

##### .search(query, callback)


##### .info(query, callback)