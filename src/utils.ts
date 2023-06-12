import chalk from "chalk";

class Logger {
  info(msg: string) {
    console.log(chalk.green(msg));
  }

  error(msg: string | Error) {
    console.error(msg);
  }
}

export const logger = new Logger();
