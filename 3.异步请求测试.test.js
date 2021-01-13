import { fetchData, rePromise } from './dabaojian.js'

beforeAll (() => {
  console.log('beforeAll');
})

test('异步代码测试', (done) => {
  fetchData((data) => {
    done();
    expect(data).toEqual(100)
  })
})
test('promise异步代码测试', (done) => {
  rePromise().then(res=> {
    done() ;
    expect(res).toEqual(1);
  })
})

afterAll (() => {
  console.log('afterAll');
})