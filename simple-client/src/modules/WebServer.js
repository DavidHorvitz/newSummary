const httpServer = require('http').Server;
const fs = require('fs');
const path = require('path');
class WebServer extends httpServer {
constructor() {
super();
const port = process.env.PORT;
this.listen(port);
this.on('request', this.requestHandler);
}
requestHandler(request, response) {
const src = fs.createReadStream(path.join(__dirname, '../static/index.html'));
src.pipe(response);
}
}
module.exports = new WebServer();