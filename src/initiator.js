//MODULES

//MICROSERVICES
const LogReg = require("./micro/logReg/logReg.js");
const Mnewo = require("./micro/mnewo/mnewo.js");
const Sftp = require("./micro/sftp/sftp.js");

const takeoff = function(stack){
    console.log("good");
};

module.exports = {
    takeoff
};
