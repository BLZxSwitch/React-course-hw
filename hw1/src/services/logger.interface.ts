/** Описывает логгер */
import { LogItem } from "./models/log-item";

export interface ILogger {
    /** Логирует любое сообщение */
    log(item: LogItem): void;

    /** Логирует информационное сообщение*/
    info(item: LogItem): void;

    /** Логирует предупреждение */
    warn(item: LogItem): void;

    /** Логирует ошибку */
    error(item: LogItem): void;
}