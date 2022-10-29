import { DivisionByZeroValidator } from "../validators/division-by-zero.validator";
import { LoggerService } from "../services/logger.service";

/** Функция оператора деления */
export const Division = (a: number, b: number): number => {
    const validationResult = new DivisionByZeroValidator().validate(b);
    if (validationResult.valid) {
        return a / b;
    } else {
        new LoggerService().error({ message: validationResult.error });
        process.exit(1);
    }
};