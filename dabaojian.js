import axios from 'axios'

export function baojian1(money) {
  return money >= 200 ? '至尊享受' : '基本按摩'
}

export function baojian2(money) {
  return money >= 1000 ? '双人享受' : '单人按摩'
}

export const fetchData = (callback) => {
  setInterval(() => {
    callback && callback(100)
  }, 1000);
}

export const rePromise = () => new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(1)
  }, 1000);
})