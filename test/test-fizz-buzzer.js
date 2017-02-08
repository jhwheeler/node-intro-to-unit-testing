const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should replace factors of 15, 5, and 3 with fizzbuzz, buzz, and fizz, respectively', function() {
        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 5, expected: 'buzz'},
            {a: 3, expected: 'fizz'},
            {a: 7, expected: 7}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            answer.should.equal(input.expected);
        });
    });
    it('should raise error if args not numbers', function() {
        const badInputs = [
            ['a'],
            [true],
            ['1'],
            [undefined],
            [NaN],
            [false],
            [null]
        ];
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input)
            }).should.throw(Error);
        });
    });
});
