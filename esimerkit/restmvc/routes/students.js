/*students.js tarjoaa REST-apin
REST-api voi olla pelkästän routterissa tai
jaettu kontrolleriin ja routteriin
*/
const express = require('express');
const router = express.Router();

// kontrolleri
const student_controller = require('../controllers/studentController');

/* Tältä näyttäisi get-reitti jos ei olisi kontrolleria */
/*
router.get('/', function(req, res, next) {
    Student.find(function(err, students) {
        if (err) {
            return next(err)
        }
        res.json(students);
    });
});
*/
/* Kun tietokantaoperaatiot ovat kontrollerissa, on routerissa pelkkä reititys
REST-apin "view" näkyy osoitteessa http://localhost:3000/students
Oikeasti REST-apin view on vastaanottavan sovelluksen model */
router.get('/', student_controller.student_list);

router.post('/', student_controller.student_post);

router.put('/updcourse/:id/:cid', student_controller.course_update);

//Tee puuttuvat reitit

/* GET student by id. */

/* GET students listing, where study points lt 100. */

/* UPDATE add course to student*/

/* UPDATE */

/* DELETE */

module.exports = router;
