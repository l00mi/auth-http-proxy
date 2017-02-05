var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
    proxy.web(req, res, {
        auth: 'admin:admin',
        target: 'http://data.zazuko.com/query'
    });
});

server.listen(80);

proxy.on('proxyRes', function(proxyRes, req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
});
