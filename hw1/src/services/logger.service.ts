import { ILogger } from "./logger.interface";
import { LogItem } from "./models/log-item";

export class LoggerService implements ILogger {
    /** @inheritdoc */
    error(item: LogItem): void {
        console.error(item.message);
    }

    /** @inheritdoc */
    info(item: LogItem): void {
        console.info(item.message);
    }

    /** @inheritdoc */
    log(item: LogItem): void {
        console.log(item.message);
    }

    /** @inheritdoc */
    warn(item: LogItem): void {
        console.warn(item.message)
    }
}