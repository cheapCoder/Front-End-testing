// NOTE:匹配器

test('toBe', () => {    // 就是 ===
  let a = {}
  expect(a).toBe(a)
})
test('toEqual', () => {     // 外形
  let a = {}
  expect(a).toEqual({})
})
test('toBeNull', () => {
  let a = null
  expect(a).toBeNull()
})
test('toBeUndefined', () => {
  let a 
  expect(a).toBeUndefined()
})
test('toBeDefined', () => {
  let a = null
  expect(a).toBeDefined()
})
test('toBeTruthy', () => {
  let a = {}
  expect(a).toBeTruthy()
})
test('toBeFalsy', () => {
  let a = null
  expect(a).toBeFalsy()
})
test('toBeGreaterThan', () => {   // 大于
  let a = 10
  expect(a).toBeGreaterThan(4)
})
test('toBeLessThan', () => {   // 小于
  let a = 10
  expect(a).toBeLessThan(11)
})
test('toBeGreaterThanOrEqual', () => {    //  大于等于
  let a = 10
  expect(a).toBeGreaterThanOrEqual(10)
})
test('toBeLessThanOrEqual', () => {       //  小于等于
  let a = 10
  expect(a).toBeGreaterThanOrEqual(10)
})
test('toBeCloseTo', () => {       // 解决浮点数计算不精确的问题
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})
test('toMatch', () => {         // 字符串内是否包含
  const arr = 'li, liu, wang'
  expect(arr).toMatch('wang')
})
test('toContain', () => {       // 数组、set内是否包含
  const arr=['谢大脚','刘英','小红']
  const data = new Set(arr)
  expect(data).toContain('谢大脚')
})
test('toThrow', () => {       // 程序内是否抛出异常
  function throwError() {
    // throw new Error('this is an error')
  }
  expect(throwError).not.toThrow('this is an error')    //使用 .not取反
  // expect(outError).toThrow('this is an error')
})
