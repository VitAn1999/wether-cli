#!/usr/bin/env node
import { getArgs } from './helpers/argv.js';
import { printError, printHelp } from './services/log.services.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  } else if (args.s) {
    console.log(
      `Your sity ${String(args.s.charAt(0)).toUpperCase()}${String(
        args.s.substring(1)
      )} save \n`
    );
  } else if (args.t) {
    console.log(`Your token ${args.t} activate \n`);
  } else if (args.length == 2) {
    // Вывод погоды
  } else {
    printError('unknow command');
  }
};

initCLI();
