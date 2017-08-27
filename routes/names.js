var express 	= require('express');
var fs 		= require('fs');
var router 	= express.Router();

/* GET names listing. */
router.get('/', function(req, res, next) {
    var names = [];
    var parents = [];
       

    try {
  	 	var pp = fs.readFileSync('./resources/parents.txt').toString().split("\n");
        for (var i = 0; i < pp.length; i++) {
             parents.push({"name": pp[i]});
        
        }

        var nn = fs.readFileSync('./resources/names.txt').toString().split("\n");
        for (var i = 0; i < nn.length; i++) {
            var n = nn[i].split(" ");
            var o = {"name": n[0]};
            if (n.length>1) {
                o["url"] = n[1];
            } else {
                o["url"] = "N/A";
            }
            names.push(o);
        
        }

	} catch (e) {
		console.log(e);
	}

    var obj = {"names" : names, "parents": parents}

    res.send(obj);
});

module.exports = router;
