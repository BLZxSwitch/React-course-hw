import { LoggerService } from "./logger.service";
import { LogItem } from "./models/log-item";

describe("Тесты сервиса логирования", () => {
    const logger = new LoggerService();

    test("Должны залогировать сообшение", () => {
        const consoleMock = jest.spyOn(global.console, "log").mockImplementation();

        const message = "test message";
        const loggerItem: LogItem = { message };

        logger.log(loggerItem);

        expect(consoleMock).toHaveBeenCalledWith(message);
    });

    test("Должны залогировать ошибку", () => {
        const consoleMock = jest.spyOn(global.console, "error").mockImplementation();

        const message = "test message";
        const loggerItem: LogItem = { message };

        logger.error(loggerItem);

        expect(consoleMock).toHaveBeenCalledWith(message);
    });

    test("Должны залогировать предупреждение", () => {
        const consoleMock = jest.spyOn(global.console, "warn").mockImplementation();

        const message = "test message";
        const loggerItem: LogItem = { message };

        logger.warn(loggerItem);

        expect(consoleMock).toHaveBeenCalledWith(message);
    });

    test("Должны залогировать информационное сообщение", () => {
        const consoleMock = jest.spyOn(global.console, "info").mockImplementation();

        const message = "test message";
        const loggerItem: LogItem = { message };

        logger.info(loggerItem);

        expect(consoleMock).toHaveBeenCalledWith(message);
    });
})