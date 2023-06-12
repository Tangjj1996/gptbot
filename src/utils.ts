import chalk from "chalk";

class Logger {
  info(msg: unknown) {
    console.log(chalk.green(msg));
  }

  error(msg: unknown | Error) {
    console.error(msg);
  }
}

export const logger = new Logger();
