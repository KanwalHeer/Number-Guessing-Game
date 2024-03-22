#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta(`Wellcome to number guesing game`));
class Game {
    userNumber;
    constructor() {
        this.userNumber = 0;
    }
    async startGame() {
        let exit = false;
        do {
            const answer = await inquirer.prompt({
                name: "select",
                type: "list",
                message: "choose an action",
                choices: ["play game", "Exit"],
            });
            switch (answer.select) {
                case "play game":
                    await this.playGame();
                    break;
                case "Exit":
                    exit = true;
                    console.log(chalk.yellow(`You exited the game, Thank you and good bye!`));
                    break;
                default:
                    break;
            }
        } while (!exit);
    }
    async playGame() {
        const computerGuessNumber = Math.floor(Math.random() * 10) + 1;
        const userNumberIs = await inquirer.prompt({
            name: "guessNumber",
            type: "number",
            message: "guess the number betwwen (1 to 10):",
        });
        const userGuessNumber = userNumberIs.guessNumber;
        this.userNumber = userGuessNumber;
        if (this.userNumber === computerGuessNumber) {
            console.log(chalk.green(`Computer guess number is: ${computerGuessNumber} and your guess number is ${this.userNumber} ,congratulations you have won the game`));
        }
        else if (this.userNumber > computerGuessNumber && this.userNumber < 10) {
            console.log(chalk.redBright(`Computer guess number is: ${computerGuessNumber} and your guess number is ${this.userNumber} your guess number is greater,you have lost the game`));
        }
        else if (this.userNumber < computerGuessNumber && this.userNumber > 0) {
            console.log(chalk.redBright(`Computer guess number is: ${computerGuessNumber} and your guess number is ${this.userNumber}  yuor guess number is lower,you have lost the game`));
        }
        else if (this.userNumber > 10 || this.userNumber < 0) {
            console.log(chalk.blueBright(`play again and choose number between 1 t0 10`));
        }
    }
}
const guessNumberGame = new Game();
guessNumberGame.startGame();
