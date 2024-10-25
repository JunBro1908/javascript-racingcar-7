function validateCarNames(names) {
  const carNames = names.split(",");
  for (let name of carNames) {
    if (name.length === 0 || name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 이름은 5자 이하만 가능합니다.");
    }
  }
  return carNames;
}

function validateTryCount(count) {
  if (isNaN(count) || count <= 0) {
    throw new Error("[ERROR] 시도할 횟수는 자연수여야 합니다.");
  }
  return parseInt(count, 10);
}

module.exports = { validateCarNames, validateTryCount };
