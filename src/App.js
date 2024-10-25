import { Console } from "@woowacourse/mission-utils";
import RacingGame from "./RacingGame.js";
import { validateCarNames, validateTryCount } from "./validation.js";

class App {
  async run() {
    let carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    let tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    try {
      carNames = validateCarNames(carNames);
      tryCount = validateTryCount(tryCount);

      const game = new RacingGame(carNames, tryCount);
      game.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
