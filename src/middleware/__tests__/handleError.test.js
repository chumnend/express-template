"use strict";

const handleError = require("../handleError");
const chai = require("chai");
const expect = chai.expect;

describe("MIDDLEWARE UNIT TEST - HANDLEERROR", function() {
    it("expects to parse messages correctly", function() {
        // setup test
        let err = {
            status: 200,
            message: "this is a test",
        };
        let req = {};
        let res = {
            statusCode: null,
            body: null,
            status: function(code) {
                this.statusCode = code;
                return this; 
            },
            json: function(data){
                this.body = data;
            },
        };
        let next = function() {};
        
        // start test
        handleError(err, req, res, next);
        expect(res.statusCode).to.be.equal(err.status);
        expect(res.body).to.have.property("message", err.message);
    });
});
