var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var port = 8080;
app.use(bodyParser.json());
app.get('/lock', function (req, res) {
    console.log("locked");
    res.send("asd");
    res.end();
});
app.get("/unlock", function (req, res) {
    console.log("unlocked");
    res.send("unlocked");
    req.end();
});
app.listen(port, function () {
    console.log("listening on port " + port);
});
//# sourceMappingURL=server.js.map