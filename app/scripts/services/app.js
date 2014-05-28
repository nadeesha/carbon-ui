var pipe = require('pipe');
var router = require('router');

pipe.plug(router);

router.app.get('/status', function(req, res) {
	res.status = 200;
}); 