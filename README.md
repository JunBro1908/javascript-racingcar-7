# Racing Game

## 1. Project Setup
- **Fork and clone** the project.
- Create the **initial folder structure** and **install necessary libraries**.

## 2. Input Validation Logic
- **Validate car names**: Names should be separated by commas and must be 5 characters or less.
- **Validate number of attempts**: Only positive integers are allowed.

## 3. Car Class and Basic Logic
- **Create a car object** with attributes: name and current position.
- **Implement movement condition**: Move forward if a random value between 0 and 9 is 4 or higher.

## 4. Car Movement and Game Execution
- **Repeat the movement** for all cars based on the user-given number of attempts.
- **Save and display results** after each round.

## 5. Determine the Winner
- **Find the winner** by identifying the car(s) with the furthest distance after all rounds.
- **Show multiple winners** separated by commas if there is a tie.

## 6. Input and Output Interface
- **Get car names and number of attempts** from the user.
- **Display results** of each round and the final winners.

## 7. Error Handling
- If there’s **invalid input**, display an **"[ERROR]"** message and stop the program.
