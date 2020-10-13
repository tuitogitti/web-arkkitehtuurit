const Student = require('../models/Student.js');
//const helpers = require('./helpers.js');
/*
Tietokantaoperaatiot voidaan hoitaa kontrollerissa, jolloin
routeriin jää pelkkä reititys
*/
// kaikkien opiskelijoiden haku
exports.student_list = function (req, res, next) {
  Student.find(function (err, students) {
    if (err) {
      return next(err);
    }
    res.json(students);
  });
};

// opiskelijan postaus kantaan
exports.student_post = function (req, res, next) {
  Student.create(req.body, function (err, student) {
    if (err) {
      return next(err);
    }
    res.json(student); // näytetään postattu opiskelija
    //res.send('Postasit opiskelijan: \n' + student);
  });
};

// haku id:n perusteella

// haetaan ne joilla study_points alle 100

// Kurssin lisäys määrätylle opiskelijalle

//opiskelijan updeittaus

//opiskelijan poisto

// Määrätyn opiskelijan määrätyn kurssin päivitys
exports.course_update = function (req, res, next) {
  Student.findOneAndUpdate(
    { _id: req.params.id, 'courses._id': req.params.cid },
    { $set: { 'courses.$': req.body } },
    function (err) {
      if (err) {
        return next(err);
      }
      res.send('Kurssi päivitetty!');
    }
  );
};

// välitetään opiskelijat viewiin
exports.student_list_topage = function (req, res, next) {
  Student.find(function (err, students) {
    if (err) {
      res.render('error');
    } else {
      //mennään list -viewiin ja viedään indeksissä list muuttuja rows
      res.render('list', {
        list: students,
        title: 'List',
      });
    }
  });
};
