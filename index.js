const say = number => {
    if (!number) return number
    if (number % 15 === 0) return 'Fizz Buzz'
    if (number % 5 === 0) return 'Buzz'
    if (number % 3 === 0) return 'Fizz'

    return number
}

module.exports = {
    say
}
