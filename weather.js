#!/usr/bin/env node
import { getArgs } from './helpers/argv.js';
import { getWeather } from './services/api.services.js';
import {
  printError,
  printHelp,
  printSuccess,
  printWeather
} from './services/log.services.js';
import { getKeyValue, setKeyValue } from './services/storage.services.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Token is undefined. Define token via -t [token]');
    return;
  }
  try {
    await setKeyValue('token', token);
    printSuccess('Token saved');
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError('City is undefined. Define city via -c [city]');
    return;
  }
  try {
    await setKeyValue('city', city);
    printSuccess(
      `Your sity ${String(city.charAt(0)).toUpperCase()}${String(
        city.substring(1)
      )} saved \n`
    );
  } catch (e) {
    printError(e.message);
  }
};

const getForecast = async () => {
  const city = process.env.CITY ?? (await getKeyValue('city')) ?? 'minsk';
  try {
    const forecast = await getWeather(city);
    printWeather(forecast);
  } catch (e) {
    if (e?.response?.status == 400) {
      printError('City is underfined');
    } else if (e?.response?.status == 401) {
      printError('Token is not correct');
    } else {
      printError(e.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  } else if (args.c) {
    return saveCity(args.c);
  } else if (args.t) {
    return saveToken(args.t);
  } else if (Object.keys(args).length === 0) {
    return await getForecast();
  } else {
    return printError('unknow command');
  }
};

initCLI();
