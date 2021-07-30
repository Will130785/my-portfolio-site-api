const tests = require('./tests')
test('adds 1 + 2 to equal 3', () => {
  expect(tests.sum(1, 2)).toBe(3)
})

test('adds 2 + 2 to not equal 5', () => {
  expect(tests.sum(2, 2)).not.toBe(5)
})

test('returns the greeting Hello', () => {
  expect(tests.greeting('Hello')).toBe('Hello')
})

test('object assignment', () => {
  expect(tests.data).toEqual({one: 1, two: 2})
})

test('Should be null', () => {
  expect(tests.isNull()).toBeNull()
})

test('Should be falsy', () => {
  expect(tests.checkValue(null)).toBeFalsy()
})

test('Object asignment 2', () => {
  expect(tests.createUser()).toEqual({firstName: 'Will', lastName: 'Constable'})
})
