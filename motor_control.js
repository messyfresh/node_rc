var io = require('socket.io').listen(80);
//var fs = require('fs'); 
var SerialPort = require('serialport').SerialPort; 
var serial = new SerialPort("/dev/ttyACM0"); 


function serialOpen (req, res) {
        serial.on("open", function(){
                console.log('Serial Connection Open');
        });
}
function motor1Left (req, res) {
        serial.write('M1L\n', function(err, results){
                //console.log(err);
                //console.log('results ' + results);
                console.log('Motor 1 Left Serial');
    });
}
function motor1Right (req, res) {
        serial.write('M1R\n', function(err, results){
                //console.log('err ' + err);
                //console.log('results ' + results);
                console.log('Motor 1 Right Serial');
    });
}
function motor1Stop (req, res) {
        serial.write('M1S\n', function(err, results){
            //console.log('err ', + err);
            //console.log('results ' + results);
            console.log('Motor 1 Stop Serial');
    });
}
function motor2Left (req, res) {
        serial.write('M2L\n', function(err, results){
            //console.log('err ', + err);
            //console.log('results ' + results);
            //console.log('Motor 1 Stop Serial');
    });
}
function motor2Right (req, res) {
        serial.write('M2R\n', function(err, results){
            //console.log('err ', + err);
            //console.log('results ' + results);
            //console.log('Motor 1 Stop Serial');
    });
}
function motor2Stop (req, res) {
        serial.write('M2S\n', function(err, results){
            //console.log('err ', + err);
            //console.log('results ' + results);
            //console.log('Motor 1 Stop Serial');
    });
}
serialOpen();

io.sockets.on('connection', function (socket) {
    
    socket.on('motor1', function(data) {
    if (data == 'M1L') {
    motor1Left();
        //console.log('M1L from Socket');
    } else if (data == 'M1R') {
    motor1Right();
        //console.log('M1R from Socket');
    } else if (data == 'M1S') {
    motor1Stop();
        //console.log('M1S from Socket');
    }
    });
    
    socket.on('motor2', function(data) {
    if (data == 'M2L') {
    motor2Left();
        //console.log('M2L from Socket');
    } else if (data == 'M2R') {
    motor2Right();
        //console.log('M2R from Socket');
    } else if (data == 'M2S') {
    motor2Stop();
        //console.log('M2S from Socket');
    }
    });
});
