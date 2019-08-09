const chalk = require('chalk');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(chalk.yellow('Enter a number: '), number => {
  if (isNaN(number)) {
    console.log(chalk.red('Enter a number'));
  } else {
    console.log(
      chalk.green(`The factorial of ${number} is ${factorial(number)}`)
    );
  }

  readline.close();
});

const factorial = function(number) {
    if (number == 0) {
        return 1;
    }else if(number == -1){
        return -1;
    }
    return number * factorial(number - 1);
}

module.exports = factorial;

