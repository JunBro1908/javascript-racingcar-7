const { Console } = require("@woowacourse/mission-utils");

class App {
  async run() {
    const carNames = await new Promise((resolve) => {
      Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
        (input) => {
          resolve(input.split(",").map((name) => name.trim()));
        }
      );
    });

    const tryCount = await new Promise((resolve) => {
      Console.readLineAsync("시도할 횟수는 몇 회인가요?\n", (input) => {
        resolve(parseInt(input, 10));
      });
    });

    const game = new RacingGame(carNames, tryCount);
    game.start();
  }
}

export default App;
