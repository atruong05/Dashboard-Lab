var express = require('express');
var router = express.Router();


function getProp(req){
	var reqObj = [] ;
	for (var propName in req.query) {
		if (req.query.hasOwnProperty(propName)) {
			reqObj[propName] = req.query[propName];
		}
	}
	console.log(reqObj);
	return reqObj;
};

router.get('/request', function(req, res){
	res.send(getProp(req));
});



module.exports = router;

