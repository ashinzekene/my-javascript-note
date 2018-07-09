const compose = require('../compose');

const removeLetter = letter => words => Array.prototype.filter.call(words, x => x !== letter)
const upperCase = x => x.toUpperCase()

const str = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sapiente magni totam quasi numquam minus doloribus tempora fugiat nemo, molestiae eum accusantium, sit ipsa quod suscipit? Rerum possimus numquam consectetur."

test('Compose: String should not contain e', () => {
  var res = compose(removeLetter('e'))(str)
  expect(res.indexOf('e')).toBe(-1);
});