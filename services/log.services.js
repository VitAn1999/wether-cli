import chalk from 'chalk';
import dedent from 'dedent-js';

const log = console.log;

const printError = (err) => {
  log(chalk.bgRed(' ERROR ') + ' ' + err);
};

const printSuccess = (msg) => {
  log(chalk.bgGreen(' SUCCESS ') + ' ' + msg);
};

const printHelp = () => {
  log(
    dedent`${chalk.bgCyan(' HELP ')} 
    without parameters - weather output;
    -h - call a helper; 
    -s [city] - city selection;
    -t [token] - token activation.`
  );
};

export { printError, printSuccess, printHelp };
