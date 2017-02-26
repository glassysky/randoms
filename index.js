function randomInt (max, min) {
  return min + Math.floor((max - min) * Math.random())
}

module.exports = randomInt;