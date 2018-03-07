//MODULES

//MICROSERVICES
const LogReg = require("./micro/logReg/logReg.js");
const Mnewo = require("./micro/mnewo/mnewo.js");
const Sftp = require("./micro/sftp/sftp.js");

function test(a,b,c){ 
    for(let i = 0; i < 3; i++){
        console.log(a,b,c);
    }
}
