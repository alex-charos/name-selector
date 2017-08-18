var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var names = [];
                names.push({"name":"ΑΡΙΑΔΝΗ", "url":"https://el.wikipedia.org/wiki/Αριάδνη"});
                names.push({"name":"ΙΟΛΗ", "url":"https://el.wikipedia.org/wiki/Ιόλη"});
                names.push({"name":"ΙΟΚΑΣΤΗ", "url":"N/A"});
                names.push({"name":"ΕΜΜΕΛΕΙΑ", "url":"N/A"});
                names.push({"name":"ΑΝΤΙΓΟΝΗ", "url":"N/A"});
                names.push({"name":"ΙΣΜΗΝΗ", "url":"N/A"});
                names.push({"name":"ΔΩΡΟΘΕΑ", "url":"N/A"});
                names.push({"name":"ΗΛΕΚΤΡΑ", "url":"N/A"});
                names.push({"name":"ΜΑΛΕΝΑ", "url":"N/A"});
                names.push({"name":"ΙΩΑΝΝΑ", "url":"N/A"});
                names.push({"name":"ΜΑΡΙΑ", "url":"N/A"});
                 names.push({"name":"ΝΕΦΕΛΗ", "url":"N/A"});
                 names.push({"name":"ΚΑΛΛΙΣΤΩ", "url":"N/A"});
  res.send(names);
});

module.exports = router;
