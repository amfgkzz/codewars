let assert = require('chai').assert;
let domainName = require('./domainName');

describe('Domain Name Test', function(){
    let urlOne = "http://github.com/carbonfive/raygun";

    it('Type test', function(){
        assert.typeOf(domainName(urlOne), 'string')
    })

    it('Parsed domain name Test', function(){
        assert.equal(domainName(urlOne), 'github')
    })
})