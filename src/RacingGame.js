import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class RacingGame {
  constructor(carNames, tryCount) {
    this.cars = carNames.map((name) => new Car(name));
    this.tryCount = tryCount;
  }

  start() {
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => car.move());
      this.printRoundResult();
    }
    this.printWinners();
  }

  printRoundResult() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("");
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default RacingGame;
