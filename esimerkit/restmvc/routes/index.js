const express = require('express');
const router = express.Router();

// kontrolleri
const student_controller = require('../controllers/studentController');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

/* GET list page. */
router.get('/list', student_controller.student_list_topage);

module.exports = router;
