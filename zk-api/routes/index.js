var express = require('express');
var router = express.Router();
var query = require('../mysql');
var sql = require('../mysql/sql');
/* GET home page. */
router.get('/users', function(req, res, next) {
    var page = req.query.page,
        pageSize = req.query.pageSize;
    query(sql.SELECT_COUNT, function(err, results) {
        if (err) {
            res.json({ code: 0, data: err })
        } else {
            var total = Math.ceil((results[0]['count(*)']) / pageSize);
            queryCount(total);
        }
    })

    function queryCount(total) {
        var start = (page - 1) * pageSize;
        var Sql = `select * from data limit ${start},${pageSize}`
        query(Sql, function(err, results) {
            if (err) {
                res.json({ code: 0, data: err })
            } else {
                res.json({ code: 1, data: results, total: total })
            }
        })
    }

});

module.exports = router;