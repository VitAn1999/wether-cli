import chalk from 'chalk';
import dedent from 'dedent-js';

const log = console.log;

const printError = (err) => {
  log(chalk.bgRed(' ERROR ') + ' ' + err);
};

const printInfo = (msg) => {
  log(chalk.bgBlue(' WEATHER TODAY ') + ' ' + msg);
};

const printSuccess = (msg) => {
  log(chalk.bgGreen(' SUCCESS ') + ' ' + msg);
};

const printWeather = (forecast) => {
  log(
    dedent`${chalk.bgYellowBright(' WEATHER ')}
    Погода в ${forecast.name} - ${forecast.weather[0].description},
    температура ${forecast.main.temp} C,
    ощущается как ${forecast.main.feels_like} C,
    относительная влажность - ${forecast.main.humidity}%,
    скорость ветра - ${forecast.wind.speed} м/с`
  );
};

const printHelp = () => {
  log(
    dedent`${chalk.bgCyan(' HELP ')} 
    without parameters - weather output;
    -h - call a helper; 
    -c [city] - city selection;
    -t [token] - token activation.`
  );
};

export { printError, printSuccess, printHelp, printInfo, printWeather };
