import path from "path";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import appRoot from "app-root-path";
import environment from "@src/external/configuration/environments";

const logPath: string = environment.configuration.logPath
  ? environment.configuration.logPath
  : "";

const filenameRotate = path.join(`${appRoot}`, logPath);

const transport: DailyRotateFile = new DailyRotateFile({
  filename: filenameRotate,
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: environment.configuration.logger.maxLogFileSize || "100m",
  maxFiles: environment.configuration.logger.maxLogFiles || "7d",
});

export default winston.createLogger({
  level: environment.configuration.logger.logLevel || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (info) =>
        `${dateTime()} [${info.level.toUpperCase()}]: ${info.message}` +
        (info.splat !== undefined ? `${info.splat}` : " ")
    )
  ),
  defaultMeta: { service: "idbe-bff-dadosbeneficiario" },
  transports: [transport],
});

function dateTime() {
  return new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    timeZoneName: "short",
  });
}
