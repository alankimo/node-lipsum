// Generated by CoffeeScript 1.3.3
/*
  Web Service for lipsum.org

  author: Travis Kaufman
*/

var http, lipsumService, url,
  _this = this;

http = require('http');

url = require('url');

lipsumService = {
  get: function(format, callback, queryOpts) {
    var endpoint, req;
    _this.urlopts = {
      protocol: 'http:',
      hostname: 'lipsum.lipsum.com',
      pathname: "/feed/" + format
    };
    if (queryOpts != null) {
      _this.urlopts.query = queryOpts;
    }
    endpoint = url.format(_this.urlopts);
    req = http.request(endpoint, function(res) {
      var payload;
      payload = "";
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        return payload += chunk;
      });
      return res.on('end', function() {
        return callback(payload);
      });
    }).on('error', function(err) {
      throw new Error(err.message);
    });
    return req.end();
  }
};

if (typeof module !== "undefined" && module !== null) {
  module.exports = lipsumService;
}