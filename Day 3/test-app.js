const { expect } = require('chai');



var should = require('chai').should()
var foo = 'bar'
var beverages = { tea: ['chai', 'matcha', 'oolong'] };

describe('Equality check', () => {
    it('Equals to ', () => {
        foo.should.be.a('string')
    });
});
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.property('tea').with.length(3);
