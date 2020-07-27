const { say } = require('../index');

describe('#say', () => {
    test.each`
    number  | expected
    ${30}   | ${'Fizz Buzz'}
    ${20}   | ${'Buzz'}
    ${15}   | ${'Fizz Buzz'}
    ${14}   | ${14}
    ${5}    | ${'Buzz'}
    ${4}    | ${4}
    ${3}    | ${'Fizz'}
    ${2}    | ${2}
    ${0}    | ${0}
    ${''}   | ${''}
  `('should return $expected when number is $number', ({ number, expected }) => {
      const result = say(number)

      expect(result).toBe(expected);
    });
})