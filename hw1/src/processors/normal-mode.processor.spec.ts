import { LoggerService } from "../services/logger.service";
import { NormalModeProcessor } from "./normal-mode.processor";
import { Operators } from "../constants";

describe("Тесты процессора нормального режима", () => {
    const logger = new LoggerService();
    const processor = new NormalModeProcessor(logger);

    test("Должный вычислить выражение", () => {
        const result = processor.process("2+(2+(2+2)*2)-(1+1*3)+(2/2+1)+sin(1)^2+3!", Operators[0]);
        expect(result).toBe(16.70807341827357);
    });
})
