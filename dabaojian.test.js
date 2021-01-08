const { baojian1, baojian2 } = require('./dabaojian')

test('test-1', () => {
  expect(baojian1(300)).toBe('至尊享受')
})
test('test-2', () => {
  expect(baojian2(2000)).toBe('人享受')
})