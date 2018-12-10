var express = require('express');
var router = express.Router();
var query = require('../mysql');
var sql = require('../mysql/sql');
/* GET home page. */
router.get('/users', function(req, res, next) {
    query(sql.SELECT_ALL, function(err, results) {
        if (err) {
            res.json({ code: 0, data: error })
        } else {
            res.json({ code: 1, data: results })
        }
    })
});

module.exports = router;