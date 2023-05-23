class Log {
  info(msg: string) {
    console.log(msg);
  }

  error(msg: string | Error) {
    console.error(msg);
  }
}

export const log = new Log();
