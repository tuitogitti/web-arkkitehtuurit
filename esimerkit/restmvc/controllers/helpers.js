/*
Helpperifunktioilla voidaan hoitaa koodissa toistuvia juttuja
Näitä ei ole kuitenkaan käyetty tässä sovelluksessa
*/

//onnistunut toiminto
exports.send_success = function (res, data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let output = { error: null, data: data };
    res.end(JSON.stringify(output) + '\n');
}


exports.send_failure = function (res, server_code, err) {
    const code = (err.code) ? err.code : err.name;
    res.writeHead(server_code, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: code, message: err.message }) + '\n');
}


exports.invalid_resource = function () {
    return exports.make_error('invalid_resource',
        'the requested resource does not exist.');
}

exports.no_such_student = function () {
    return exports.make_error('no_such_student',
        'The specified student does not exist');
}

//virheenkäsittely
exports.make_error = function (err, msg) {
    const e = new Error(msg);
    e.code = err;
    return e;
}