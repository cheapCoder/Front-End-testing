function baojian1(money) {
  return money >= 200 ? '至尊享受' : '基本按摩'
}

function baojian2(money) {
  return money >= 1000 ? '双人享受' : '单人按摩'
}

module.exports = {
  baojian1, baojian2
}