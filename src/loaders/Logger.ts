export {};
import winston from 'winston';
import configss from '../config';
import {transports} from '../config/logging'

const LoggerInstance = winston.createLogger({
  level: configss.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.colorize({ colors: { info: 'blue' } }),
    winston.format.label({label: "dusinbox"}),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: transports
});

export default LoggerInstance;