import logger from "@src/external/configuration/logger/winston";

const log = console.log;
const error = console.error;
const warn = console.warn;

export default (console: {
  log: CallableFunction;
  error: CallableFunction;
  warn: CallableFunction;
}) => {
  console.log = function (...args: (Iterable<any> | ArrayLike<any>)[]) {
    const listOfArguments = Array.from(args);
    log.apply(console, listOfArguments);
    logger.info(listOfArguments);
  };

  console.error = function (...args: (Iterable<any> | ArrayLike<any>)[]) {
    const listOfArguments = Array.from(args);
    error.apply(console, listOfArguments);
    logger.error(listOfArguments);
  };

  console.warn = function (...args: (Iterable<any> | ArrayLike<any>)[]) {
    const listOfArguments = Array.from(args);
    warn.apply(console, listOfArguments);
    logger.warn(listOfArguments);
  };

  return console;
};
