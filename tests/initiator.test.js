const Chai = require("chai");
const initiator = require("../src/initiator");

describe("initiator", () => {
    it("intiator have the takeoff",()=>{
        Chai.expect(initiator.takeoff).to.be.a("function");
    });
});
