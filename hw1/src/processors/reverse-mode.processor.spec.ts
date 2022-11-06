import { LoggerService } from "../services/logger.service";
import { ReverseModeProcessor } from "./reverse-mode.processor";

describe("Тесты процессора режима Обратная польская запись", () => {
    const logger = new LoggerService();
    const processor = new ReverseModeProcessor(logger);

    test("Должный вычислить выражение", () => {
        const result = processor.process("5 4 ^ 5 6 * / 10");
        expect(result).toBe(10);
    });
})